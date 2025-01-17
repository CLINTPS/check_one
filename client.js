const PROTO_PATH="./proto/user.proto"
import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";

    const packageDefinition =protoLoader.loadSync(PROTO_PATH,{
        keepCase:true,
        longs:String,
        enums:String,
        arrays:true,
    })

    const UserService =grpc.loadPackageDefinition(packageDefinition).UserService;
    console.log("Check client 13th line");
    const client =new UserService("127.0.0.1:30043",
        grpc.credentials.createInsecure()
    );


export default client;



