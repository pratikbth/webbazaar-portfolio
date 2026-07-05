import React, { useEffect, useRef } from 'react';

export default function LiquidShader() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) return;

    // Vertex Shader Source
    const vsSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // Fragment Shader Source
    const fsSource = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec2 u_mouse;

      // Color palette
      vec3 colorVoid = vec3(0.074, 0.074, 0.074); // #131313
      vec3 colorCyan = vec3(0.0, 0.949, 0.996); // #00f2fe
      vec3 colorMagenta = vec3(0.455, 0.227, 0.835); // #743ad5

      void main() {
        vec2 st = gl_FragCoord.xy / u_resolution.xy;
        st.x *= u_resolution.x / u_resolution.y;

        // Interactive warping using mouse
        vec2 mouseNormalized = u_mouse / u_resolution;
        mouseNormalized.x *= u_resolution.x / u_resolution.y;
        float distToMouse = distance(st, mouseNormalized);

        // Fluid waves calculation
        float wave1 = sin(st.x * 3.0 + u_time * 0.4) * 0.5 + 0.5;
        float wave2 = cos(st.y * 3.0 - u_time * 0.3) * 0.5 + 0.5;
        
        // Displace coordinate grid slightly by mouse position
        vec2 uv = st + (wave1 * 0.1 - wave2 * 0.1) + (mouseNormalized * 0.05 / (distToMouse + 0.35));

        // Pattern generator
        float pattern = sin(uv.x * 5.0 + u_time * 0.2) * cos(uv.y * 5.0 + u_time * 0.15);
        pattern = smoothstep(-0.5, 0.5, pattern);

        // Interpolate colors based on liquid pattern
        vec3 col = mix(colorVoid, colorCyan * 0.3, pattern);
        col = mix(col, colorMagenta * 0.25, wave1 * wave2);

        // Subtle gradient glow around the mouse pointer
        float glow = smoothstep(0.4, 0.0, distToMouse);
        col += mix(colorCyan, colorMagenta, wave2) * glow * 0.15;

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    // Helper functions to create shaders
    const createShader = (gl, type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }

    const positionAttributeLocation = gl.getAttribLocation(program, 'position');
    const resolutionUniformLocation = gl.getUniformLocation(program, 'u_resolution');
    const timeUniformLocation = gl.getUniformLocation(program, 'u_time');
    const mouseUniformLocation = gl.getUniformLocation(program, 'u_mouse');

    // Quad geometry (two triangles)
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ]), gl.STATIC_DRAW);

    // Track mouse
    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    let targetMouse = { x: canvas.width / 2, y: canvas.height / 2 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      targetMouse.x = (e.clientX - rect.left) * (canvas.width / rect.width);
      targetMouse.y = (rect.height - (e.clientY - rect.top)) * (canvas.height / rect.height);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Track resolution changes
    const resizeCanvas = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationFrameId;
    let startTime = Date.now();

    const render = () => {
      resizeCanvas();

      // Lerp mouse movements for liquid smooth lag
      mouse.x += (targetMouse.x - mouse.x) * 0.08;
      mouse.y += (targetMouse.y - mouse.y) * 0.08;

      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(program);

      gl.enableVertexAttribArray(positionAttributeLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

      gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height);
      gl.uniform1f(timeUniformLocation, (Date.now() - startTime) / 1000.0);
      gl.uniform2f(mouseUniformLocation, mouse.x, mouse.y);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ filter: 'contrast(1.15) brightness(0.95)' }}
    />
  );
}
