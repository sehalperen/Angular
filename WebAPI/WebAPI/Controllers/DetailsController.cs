using System;
using System.Collections.Generic;
using System.Linq;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class DetailsController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                select IdCus,CusPhone,D.CusAdress,C.IdentityNumber, C.CusName, C.CusSurname from 
                dbo.Details D,dbo.CustomerPer C where D.Customer_ID = C.CustomerID
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


        public string Post(Details det)
        {
            try
            {
                string query = @"
                    insert into dbo.Details values
                    (
                    '" + det.CusPhone + @"'
                    ,'" + det.CusAdress + @"'
                    ,'" + det.Customer_ID + @"'
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

        public string Put(Details det)
        {
            try
            {
                string query = @"
                    update dbo.Details set
                    ,Customer_ID='" + det.Customer_ID + @"'
                    ,CusPhone='" + det.CusPhone + @"'
                    ,CusAdress='" + det.CusAdress + @"'
                    where IdCus= " + det.IdCus + @"
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
                    delete from dbo.Details
                    where IdCus= " + id + @"
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

        [Route("api/Details/GetAllCustomerNames")]
        [HttpGet]

        public HttpResponseMessage GetAllCustomerNames()
        {
            string query = @"
                    select CustomerID,CusName,CusSurname from dbo.CustomerPer";

            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.
                ConnectionStrings["CustomerAppDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }


            return Request.CreateResponse(HttpStatusCode.OK, table);
        }
    }
}
