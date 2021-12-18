using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class CustomerController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                select CustomerID,CusName,CusSurname,IdentityNumber,IsUnique from
                dbo.CustomerPer
                ";
            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.
                ConnectionStrings["CustomerAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query,con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }


            return Request.CreateResponse(HttpStatusCode.OK, table);
        }


        public string Post(CustomerPer cus)
        {
            try
            {
                char[] sesliHarfler = { 'a', 'e', 'i' , 'ı', 'ü', 'u', 'o', 'ö', 'A', 'E', 'İ', 'I', 'Ü', 'U', 'O', 'Ö' };

                int sayac = 0;

                foreach (char harf in cus.CusName)

                {
                    if (sesliHarfler.Contains(harf) == true)
                    {
                        sayac++;
                        Console.WriteLine(harf);
                    }
                }
                if (sayac >= 3)
                {
                    cus.IsUnique = 1;
                }
                else
                {
                    cus.IsUnique = 0;
                }
                string query = @"
                    insert into dbo.CustomerPer values
                    (
                    '" + cus.CusName + @"'
                    ,'" + cus.CusSurname+ @"'
                    ,'" + cus.IdentityNumber + @"'
                    ,'" + cus.IsUnique + @"'
                    )
                    ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["CustomerAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Başarılı";
            }
            catch (Exception)
            {
                return "Hata!";
            }
        }

        public string Put(CustomerPer cus)
        {
            try
            {
                string query = @"
                    update dbo.CustomerPer set
                    CusName='" + cus.CusName + @"'
                    ,CusSurname='" + cus.CusSurname + @"'
                    ,IdentityNumber='" + cus.IdentityNumber + @"'
                    ,IsUnique='" + cus.IsUnique + @"'
                    where CustomerID= " + cus.CustomerID + @"
                    ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["CustomerAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Güncelleme Başarılı";
            }
            catch (Exception)
            {
                return "Hata1!";
            }
        }

        public string Delete(int id)
        {
            try
            {
                string query = @"
                    delete from dbo.CustomerPer
                    where CustomerID= " + id + @"
                    ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["CustomerAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Silme Başarılı";
            }
            catch (Exception)
            {
                return "Hata!";
            }
        }

    }
}
