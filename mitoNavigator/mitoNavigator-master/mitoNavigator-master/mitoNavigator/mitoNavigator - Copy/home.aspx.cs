using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace mitoNavigator
{
    public partial class home : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Unnamed1_Click(object sender, EventArgs e)
        {
            Response.Redirect("~/GIN_WhatiTheMitocondra.aspx"); 
        }

        protected void Unnamed2_Click(object sender, EventArgs e)
        {
            Response.Redirect("~/GIN_MitoDisease.aspx"); 
        }

        protected void Unnamed3_Click(object sender, EventArgs e)
        {
            Response.Redirect("~/GIN_whoismitocanada.aspx"); 
        }

        protected void Unnamed4_Click(object sender, EventArgs e)
        {
            Response.Redirect("~/Genetics.aspx"); 
        }
    }
}