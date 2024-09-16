import { bootstrapCameraKit } from "@snap/camera-kit";

(async function main() {
  const cameraKit = await bootstrapCameraKit({
    apiToken:
      "eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzI2NDI3OTQ5LCJzdWIiOiJjNWY0YmZlNy02NmY0LTQ5NGMtYjRmNi03N2U3ZmE0ZjYwZDZ-U1RBR0lOR35jMzE4YjFlNC1iMTg5LTRjODYtOTY5Ny0yNzEyYTE2Yjg0NzMifQ.HKSah8lpsu9PPbPN3xeZlMBJSs9hNwTjz91wytJafig",
  });

  const liveRenderTarget = document.getElementById(
    "canvas"
  ) as HTMLCanvasElement;

  const session = await cameraKit.createSession({ liveRenderTarget });

  const mediaStream = await navigator.mediaDevices.getUserMedia({
    video: { facingMode: "user" },
  });

  // const source = createMediaStreamSource(mediaStream, {
  //   transform: Transform2D.MirrorX,
  // });

  await session.setSource(mediaStream);

  await session.play();

  const lens = await cameraKit.lensRepository.loadLens(
    "56cad585-5c4a-4630-8075-d2ae732df7f0",
    "038277e6-5282-41a0-b62b-838d0b77b01e"
  );

  await session.applyLens(lens);

  // const session = await cameraKit.createSession();
  // document.getElementById("canvas").replaceWith(session.output.live);

  // const { lenses } = await cameraKit.lensRepository.loadLensGroups([
  //   "2f60dd31-093f-41ef-ad52-0367fa06e9c1",
  // ]);
  // ///

  // session.applyLens(lenses[0]);
  // let mediaStream = await navigator.mediaDevices.getUserMedia({
  //   video: {
  //     facingMode: "environment",
  //   },
  // });

  // const source = createMediaStreamSource(mediaStream, {
  //   transform: Transform2D.MirrorX,
  //   cameraType: "back",
  // });

  // await session.setSource(source);

  // session.setSource.setRenderSize(window.innerWidth, window.innerHeight);

  // session.play();

  ///
  ///
  ///
  ///

  // const source = createMediaStreamSource(mediaStream, {
  //   transform: Transform2D.MirrorX,
  //   cameraType: "front",
  // });

  // await session.setSource(source);
  // session.setSource.setRenderSize(window.innerWidth, window.innerHeight);

  // session.play();
  // await session.applyLens(source);
  //
  //
})();
