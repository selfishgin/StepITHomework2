using System;
using System.IO;
using System.Net.Sockets;
using System.Threading;
using System.Windows;
using System.Windows.Media.Imaging;

namespace Screenshot
{
    public partial class MainWindow : Window
    {
        private Thread receiveThread;

        public MainWindow()
        {
            InitializeComponent();
        }

        private void Start_Click(object sender, RoutedEventArgs e)
        {
            receiveThread = new Thread(ReceiveScreenshot);
            receiveThread.Start();
        }

        private void ReceiveScreenshot()
        {
            try
            {
                TcpClient tcpClient = new TcpClient("127.0.0.1", 27000); 
                NetworkStream stream = tcpClient.GetStream();

                MemoryStream ms = new MemoryStream();
                byte[] buffer = new byte[8192]; 
                int bytesRead;

                while ((bytesRead = stream.Read(buffer, 0, buffer.Length)) > 0)
                {
                    ms.Write(buffer, 0, bytesRead);
                }

                byte[] imageBytes = ms.ToArray();
                BitmapImage bitmap = ByteArrayToBitmapImage(imageBytes);
                Dispatcher.Invoke(() => imageBox.Source = bitmap); 

                stream.Close();
                tcpClient.Close();
            }
            catch (Exception ex)
            {
                // Handle any errors here
                MessageBox.Show(ex.Message, "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

        private BitmapImage ByteArrayToBitmapImage(byte[] byteArray)
        {
            BitmapImage bitmapImage = new BitmapImage();
            using (MemoryStream ms = new MemoryStream(byteArray))
            {
                bitmapImage.BeginInit();
                bitmapImage.StreamSource = ms;
                bitmapImage.CacheOption = BitmapCacheOption.OnLoad;
                bitmapImage.EndInit();
            }
            return bitmapImage;
        }

        
        private void Window_Closed(object sender, EventArgs e)
        {
            if (receiveThread != null && receiveThread.IsAlive)
            {
                receiveThread.Abort();
            }
        }
    }
}
