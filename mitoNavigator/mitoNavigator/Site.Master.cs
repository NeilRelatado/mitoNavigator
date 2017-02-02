using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace mitoNavigator
{
    public partial class Site : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            
        }

        protected void btnHome_Click(object sender, EventArgs e)
        {
            Response.Redirect("~/home.aspx"); 
        }

        protected void PTD_Click(object sender, EventArgs e)
        {
            Response.Redirect("~/Policy.aspx");

        }


    }
}