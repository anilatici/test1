document.addEventListener('DOMContentLoaded', function () {

    let radius = 10
    let canvas = null
    let ctx = null
    let originalImage = null;
    let doubleBuffer = null;
    let doubleBufferG = null;
    let imageToConvolve = null;
    let imageData = null;
    let data = null;
    let originalImageData = null;
    let originalData = null;
    let convolvedPixel = null;
    let convolutionMatrix = null;


    let embossConvolutionMatrix = [0, 0, 0,
        0, 2, -1,
        0, -1, 0];

    let blurConvolutionMatrix = [1, 2, 1,
        2, 4, 2,
        1, 2, 1];

    let sharpenConvolutionMatrix = [0, -2, 0,
        -2, 11, -2,
        0, -2, 0];

    let edgeDetectionConvolutionMatrix = [1, 1, 1,
        1, -7, 1,
        1, 1, 1];

    let noConvolutionMatrix = [0, 0, 0,
        0, 1, 0,
        0, 0, 0];

    let imageCanvas
    let imageCanvasG

    let foregroundCanvas
    let foregroundCanvasG

    let scribbleCanvas
    let scribbleCanvasCtx

    let image1 = new Image()
    image1.src = "../images/white.jpeg"

    let image2 = new Image()
    image2.src = "../images/grey.jpeg"

    let image3 = new Image()
    image3.src = "../images/black.jpeg"

    let image4 = new Image()
    image4.src = "../images/nature.jpeg"

    window.onload = onAllAssetsLoaded
    function onAllAssetsLoaded() {
        imageToConvolve = document.getElementById('canvas');
        doubleBuffer = document.createElement('canvas');
        doubleBufferG = doubleBuffer.getContext('2d');
        width = imageToConvolve.clientWidth;
        height = imageToConvolve.clientHeight;
        canvas.width = width;
        canvas.height = height;
        doubleBuffer.width = width;
        doubleBuffer.height = height
        originalImage = document.getElementById('originalImage');
        canvas = document.getElementById("canvas")
        ctx = canvas.getContext("2d")
        convolutionMatrix = embossConvolutionMatrix;

        imageCanvas = document.createElement('canvas')
        imageCanvasG = imageCanvas.getContext('2d')
        imageCanvas.width = canvas.clientWidth
        imageCanvas.height = canvas.clientHeight

        scribbleCanvas = document.createElement('canvas')
        scribbleCanvasCtx = scribbleCanvas.getContext('2d')
        scribbleCanvas.width = canvas.clientWidth
        scribbleCanvas.height = canvas.clientHeight

        scribbleCanvasCtx.fillStyle = "black"
        document.getElementById("colourPicker").value = "#ff0000"

        setBackgroundImage(image1)

        canvas.addEventListener('mousemove', mousemoveHandler)
    }


    function renderCanvas() {
        ctx.drawImage(imageCanvas, 0, 0, canvas.width, canvas.height)
        ctx.drawImage(scribbleCanvas, 0, 0, canvas.width, canvas.height)
    }


    function mousemoveHandler(e) {
        if (e.which === 1) {
            scribbleCanvasCtx.beginPath()
            scribbleCanvasCtx.arc(e.x, e.y, radius, 0, Math.PI * 2)
            scribbleCanvasCtx.fill()
            scribbleCanvasCtx.closePath()

            renderCanvas()
        }
    }


    function clearScreen() {
        scribbleCanvasCtx.clearRect(0, 0, scribbleCanvas.width, scribbleCanvas.height)

        renderCanvas()
    }


    function color(newColor) {
        scribbleCanvasCtx.fillStyle = newColor
    }


    function radiusSize(newRadius) {
        radius = newRadius
    }


    function setBackgroundImage(image) {
        imageCanvasG.drawImage(image, 0, 0, imageCanvas.width, imageCanvas.height)

        renderCanvas()
    }

    function sourceAtop() {
        const canvas6 = document.getElementById('canvas');
        const ctx6 = canvas6.getContext('2d');

        ctx6.globalCompositeOperation = 'source-atop';

        ctx6.fillStyle = 'blue';
        ctx6.fillRect(10, 10, 100, 100);

        ctx6.fillStyle = 'red';
        ctx6.fillRect(50, 50, 100, 100);
    }
    function sourceIn() {
        const canvas6 = document.getElementById('canvas');
        const ctx6 = canvas6.getContext('2d');

        ctx6.globalCompositeOperation = 'source-in';

        ctx6.fillStyle = 'blue';
        ctx6.fillRect(10, 10, 100, 100);

        ctx6.fillStyle = 'red';
        ctx6.fillRect(50, 50, 100, 100);
    }
    function sourceOut() {
        const canvas6 = document.getElementById('canvas');
        const ctx6 = canvas6.getContext('2d');

        ctx6.globalCompositeOperation = 'source-out';

        ctx6.fillStyle = 'blue';
        ctx6.fillRect(10, 10, 100, 100);

        ctx6.fillStyle = 'red';
        ctx6.fillRect(50, 50, 100, 100);
    }
    function sourceOver() {
        const canvas6 = document.getElementById('canvas');
        const ctx6 = canvas6.getContext('2d');

        ctx6.globalCompositeOperation = 'source-over';

        ctx6.fillStyle = 'blue';
        ctx6.fillRect(10, 10, 100, 100);

        ctx6.fillStyle = 'red';
        ctx6.fillRect(50, 50, 100, 100);
    }
    function destinationAtop() {
        const canvas6 = document.getElementById('canvas');
        const ctx6 = canvas6.getContext('2d');

        ctx6.globalCompositeOperation = 'destination-atop';

        ctx6.fillStyle = 'blue';
        ctx6.fillRect(10, 10, 100, 100);

        ctx6.fillStyle = 'red';
        ctx6.fillRect(50, 50, 100, 100);
    }
    function destinationIn() {
        const canvas6 = document.getElementById('canvas');
        const ctx6 = canvas6.getContext('2d');

        ctx6.globalCompositeOperation = 'destination-in';

        ctx6.fillStyle = 'blue';
        ctx6.fillRect(10, 10, 100, 100);

        ctx6.fillStyle = 'red';
        ctx6.fillRect(50, 50, 100, 100);
    }
    function destinationOut() {
        const canvas6 = document.getElementById('canvas');
        const ctx6 = canvas6.getContext('2d');

        ctx6.globalCompositeOperation = 'destination-out';

        ctx6.fillStyle = 'blue';
        ctx6.fillRect(10, 10, 100, 100);

        ctx6.fillStyle = 'red';
        ctx6.fillRect(50, 50, 100, 100);
    }
    function destinationOver() {
        const canvas6 = document.getElementById('canvas');
        const ctx6 = canvas6.getContext('2d');

        ctx6.globalCompositeOperation = 'destination-over';

        ctx6.fillStyle = 'blue';
        ctx6.fillRect(10, 10, 100, 100);

        ctx6.fillStyle = 'red';
        ctx6.fillRect(50, 50, 100, 100);
    }
    function lighter() {
        const canvas6 = document.getElementById('canvas');
        const ctx6 = canvas6.getContext('2d');

        ctx6.globalCompositeOperation = 'lighter';

        ctx6.fillStyle = 'blue';
        ctx6.fillRect(10, 10, 100, 100);

        ctx6.fillStyle = 'red';
        ctx6.fillRect(50, 50, 100, 100);
    }
    function darker() {
        const canvas6 = document.getElementById('canvas');
        const ctx6 = canvas6.getContext('2d');

        ctx6.globalCompositeOperation = 'darker';

        ctx6.fillStyle = 'blue';
        ctx6.fillRect(10, 10, 100, 100);

        ctx6.fillStyle = 'red';
        ctx6.fillRect(50, 50, 100, 100);
    }
    function xor() {
        const canvas6 = document.getElementById('canvas');
        const ctx6 = canvas6.getContext('2d');

        ctx6.globalCompositeOperation = 'xor';

        ctx6.fillStyle = 'blue';
        ctx6.fillRect(10, 10, 100, 100);

        ctx6.fillStyle = 'red';
        ctx6.fillRect(50, 50, 100, 100);
    }
    function copy() {
        const canvas6 = document.getElementById('canvas');
        const ctx6 = canvas6.getContext('2d');

        ctx6.globalCompositeOperation = 'copy';

        ctx6.fillStyle = 'blue';
        ctx6.fillRect(10, 10, 100, 100);

        ctx6.fillStyle = 'red';
        ctx6.fillRect(50, 50, 100, 100);
    }

    const EL = (sel) => document.querySelector(sel);
    const context = EL("#canvas").getContext("2d");

    function readImage() {
        if (!this.files || !this.files[0]) return;

        const FR = new FileReader();
        FR.addEventListener("load", (evt) => {
            const img = new Image();
            img.addEventListener("load", () => {
                context.clearRect(0, 0, context.canvas.width, context.canvas.height);
                context.drawImage(img, 0, 0);
            });
            img.src = evt.target.result;
        });
        FR.readAsDataURL(this.files[0]);
    }

    EL("#fileUpload").addEventListener("change", readImage);


    let brightnessFactor = 2;

    function brighten() {
        ctx.drawImage(imageCanvas, 0, 0, canvas.width, canvas.height);
        imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
            data[i] *= brightnessFactor;
            data[i + 1] *= brightnessFactor;
            data[i + 2] *= brightnessFactor;
        }

        ctx.putImageData(imageData, 0, 0);
    }

    function greyscale() {
        ctx.drawImage(imageCanvas, 0, 0, canvas.width, canvas.height);
        imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        data = imageData.data;
        let brightnessFactor = 1;
        for (let i = 0; i < data.length; i += 4) {
            grayScale = ((data[i] * brightnessFactor) + (data[i + 1] * brightnessFactor) + (data[i + 2] * brightnessFactor)) / 3;
            data[i] = grayScale;
            data[i + 1] = grayScale;
            data[i + 2] = grayScale;
        }

        ctx.putImageData(imageData, 0, 0);
    }

    function sepia() {
        ctx.drawImage(imageCanvas, 0, 0, canvas.width, canvas.height);
        imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
            red = data[i];
            green = data[i + 1];
            blue = data[i + 2];

            data[i] = (red * 0.393) + (green * 0.769) + (blue * 0.189);
            data[i + 1] = (red * 0.349) + (green * 0.686) + (blue * 0.168);
            data[i + 2] = (red * 0.272) + (green * 0.534) + (blue * 0.131);
        }

        ctx.putImageData(imageData, 0, 0);
    }

    function invert() {
        ctx.drawImage(imageCanvas, 0, 0, canvas.width, canvas.height);
        imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
            data[i + 0] = 255 - data[i + 0];
            data[i + 1] = 255 - data[i + 1];
            data[i + 2] = 255 - data[i + 2];
            data[i + 3] = 255;
        }


        ctx.putImageData(imageData, 0, 0);
    }

    function posterise() {
        ctx.drawImage(imageCanvas, 0, 0, canvas.width, canvas.height);
        imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
            data[i + 0] = data[i + 0] - data[i + 0] % 64;
            data[i + 1] = data[i + 1] - data[i + 1] % 64;
            data[i + 2] = data[i + 2] - data[i + 2] % 64;
            data[i + 3] = 255;
        }


        ctx.putImageData(imageData, 0, 0);
    }

    function threshold() {
        ctx.drawImage(imageCanvas, 0, 0, canvas.width, canvas.height);
        imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
            for (let rgb = 0; rgb < 3; rgb++) {
                if (data[i + rgb] < 128) {
                    data[i + rgb] = 0;
                }
                else {
                    data[i + rgb] = 255;
                }
            }
            data[i + 3] = 255;
        }


        ctx.putImageData(imageData, 0, 0);
    }

    function convolve()
    {
        function renderCanvas()
            {
                doubleBufferG.drawImage(imageToConvolve, 0, 0, width, height)

                imageData = doubleBufferG.getImageData(0, 0, width, height)
                data = imageData.data

                convolutionAmount = 0
                for (let j = 0; j < 9; j++)
                {
                    convolutionAmount += convolutionMatrix[j]
                }

                originalImageData = doubleBufferG.getImageData(0, 0, width, height)
                originalData = originalImageData.data


                for (let i = 0; i < data.length; i += 4)
                {
                    data[ i + 3] = 255

                    for (let rgbOffset = 0; rgbOffset < 3; rgbOffset++)
                    {
                        let convolutionPixels = [originalData[i + rgbOffset - width * 4 - 4],
                            originalData[i + rgbOffset - width * 4],
                            originalData[i + rgbOffset - width * 4 + 4],
                            originalData[i + rgbOffset - 4],
                            originalData[i + rgbOffset],
                            originalData[i + rgbOffset + 4],
                            originalData[i + rgbOffset + width * 4 - 4],
                            originalData[i + rgbOffset + width * 4],
                            originalData[i + rgbOffset + width * 4 + 4]]

                        convolvedPixel = 0
                        for (let j = 0; j < 9; j++)
                        {
                            convolvedPixel += convolutionPixels[j] * convolutionMatrix[j]
                        }

                        if (convolutionMatrix === embossConvolutionMatrix) 
                        {
                            data[i + rgbOffset] = convolvedPixel + 127
                        } else
                        {
                            convolvedPixel /= convolutionAmount
                            data[i + rgbOffset] = convolvedPixel
                        }
                    }
                }

                ctx.putImageData(imageData, 0, 0)
            }
    }

})

