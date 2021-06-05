turnConfig = {
    iceServers: [{
        urls: [ "stun:bn-turn1.xirsys.com" ]
     }, {
        username: "NptzjgVkTuzcBrK78iWF-hds-GNhShcAkTB5_wPM7M0wqGYBT80zpQPDvmLJ4-6EAAAAAGCx10ZkZWVwMjAwOA==",
        credential: "7266f262-c042-11eb-b8dc-0242ac140004",
        urls: [
            "turn:bn-turn1.xirsys.com:80?transport=udp",
            "turn:bn-turn1.xirsys.com:3478?transport=udp",
            "turn:bn-turn1.xirsys.com:80?transport=tcp",
            "turn:bn-turn1.xirsys.com:3478?transport=tcp",
            "turns:bn-turn1.xirsys.com:443?transport=tcp",
            "turns:bn-turn1.xirsys.com:5349?transport=tcp"
        ]
     }]
}