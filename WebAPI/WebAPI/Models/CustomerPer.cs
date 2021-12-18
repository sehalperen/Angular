using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class CustomerPer
    {
        public int CustomerID { get; set; }

        public string CusName { get; set; }

        public string CusSurname { get; set; }

        public Int64 IdentityNumber { get; set; }

        public int IsUnique { get; set; }
    }
}