import java.io.*;
import java.net.*;

class TcpClient {

    public static void main(String[] args) {
        try {
            Socket s = new Socket("127.0.0.1", 6666);
            DataOutputStream dout = new DataOutputStream(s.getOutputStream());
            dout.writeUTF("HI Kishan!!");
            dout.flush();
            dout.close();
            s.close();

        } catch (Exception e) {
            System.out.println(e);
        }
    }

}
