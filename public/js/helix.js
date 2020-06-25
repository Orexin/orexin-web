const TWO_PI = Math.PI * 2;

            class Loader {
              constructor() {
                this.initCanvas();
                this.onFrame();
              }
              
              initCanvas() {
                this.canvas = document.getElementById('js-canvas');
                console.log("ahoj :)")
                this.ctx = this.canvas.getContext('2d');
                document.addEventListener('resize', this.onResize.bind(this));
                this.onResize();
              }
              
              onResize() {
                const { canvas, width, height } = this;
                const {clientWidth: w, clientHeight: h} = canvas;
                canvas.height = h;
                canvas.width = w;
                this.height = h;
                this.width = w;
              }
              
              drawCircle(x, y, r) {
                const { ctx } = this;
                ctx.beginPath();
                ctx.arc(x, y, r, 0, TWO_PI );
                ctx.closePath();
                ctx.fill();
              }
              
              drawVortex(time, amp, freq) {
                const { ctx, width: w, height: h } = this;
                const offset = time / 35;
                for( let i = 0; i < 30; i++) {
                  let t = ( time + (i + h / 50) * 190 ) * 0.0007;
                  let s = Math.sin(t);
                  let c = Math.cos(t);
                  let x = s * (w / amp);
                  let op = Math.max( 0.2, c + 1);
                  let scale = Math.max(1, c * 3);
                  ctx.fillStyle = `rgba(255, 255, 255, ${op})`;
                  let xPos = x + w / 2;
                  let yPos = (offset + (i + 10) * freq) % 1024;
                  this.drawCircle(xPos, yPos, scale);
                }
              }
              
              onFrame(time) {
                const { ctx, width: w, height: h } = this;
                ctx.fillStyle = "rgba(32, 43, 52, 1)";
                ctx.fillRect(0, 0, w, h);
                const timeMult = Math.sin(time * 0.0001) * 5000 + 1000;
                for (let i = 0; i < 30; i++) {
                  this.drawVortex(time + (i * timeMult), i, i);
                }
                window.requestAnimationFrame(this.onFrame.bind(this));
              }
            }
            
            const loader = new Loader();