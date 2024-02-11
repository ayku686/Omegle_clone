let localStream;
let username;
let url = new URL(window.location.href);
username = url.searchParams.get("username"); 
let init = async () => {
    localStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
    });
    document.getElementById("user-1").srcObject = localStream;
    //document.getElementById("user-2").srcObject = localStream;
};
init();
let socket=io.connect();
socket.on("connect",()=>{
    if(socket.connected){
        socket.emit("userconnect",{
            displayName: username,
        });
    }
});