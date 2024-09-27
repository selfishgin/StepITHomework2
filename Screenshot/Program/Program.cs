using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Net;
using System.Net.Sockets;

class Program
{
    static void Main(string[] args)
    {
        TcpListener tcpServer = new TcpListener(IPAddress.Any, 27000); 
        tcpServer.Start();

        Console.WriteLine("Waiting for a connection...");

        while (true)
        {
            TcpClient tcpClient = tcpServer.AcceptTcpClient();
            Console.WriteLine("Client connected. Capturing and sending screenshot...");

            Bitmap screenshot = CaptureScreen();

            byte[] imageBytes = BitmapToBytes(screenshot);

            NetworkStream stream = tcpClient.GetStream();
            stream.Write(imageBytes, 0, imageBytes.Length);

            Console.WriteLine("Screenshot sent to client.");
            stream.Close();
            tcpClient.Close();
        }
    }

    static Bitmap CaptureScreen()
    {
        int screenWidth = 1920;  
        int screenHeight = 1080;

        Bitmap bmp = new Bitmap(screenWidth, screenHeight);
        using (Graphics g = Graphics.FromImage(bmp))
        {
            g.CopyFromScreen(0, 0, 0, 0, new System.Drawing.Size(screenWidth, screenHeight));
        }

        return bmp;
    }

    static byte[] BitmapToBytes(Bitmap bmp)
    {
        using (MemoryStream stream = new MemoryStream())
        {
            bmp.Save(stream, ImageFormat.Png);
            return stream.ToArray();
        }
    }
}
