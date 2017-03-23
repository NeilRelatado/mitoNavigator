<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Reasources.aspx.cs" Inherits="mitoNavigator.Reasources" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    
    
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Body" runat="server">
    <div style="text-align:center">

&nbsp;<b style="font-size:x-large;text-align:center">More Resources</b>
    <p>For more information or help check out these resources</p>



    </div>

       <table border="2">
           <tr>
        <td>
            <b style="font-size:large;text-align:center">MitoCanada</b>
            <br />
            <img src="pics/Mito_Canada_logo_webtitle.jpg" style="height: 73px; width: 320px" />
        </td>
        <td>
            <p>The MitoCanada Foundation is a national charitable not-for-profit corporation established in 2010, and committed to seeing a cure for mitochondrial disease. We do this by investing in awareness and education activities to raise the profile of mitochondrial disease with health system decision-makers. Further, the Foundation has invested more than $1million in research in Canada. We rely on the generous support of our volunteers, donors, and partners in our shared mission to improve the lives of Canadians living with mitochondrial disease.
Milestones</p>
            <b>Links: </b>
            <asp:HyperLink style="color:#7c6954;" ID = "HyperLink1" runat=server Text="Website"
	NavigateUrl="http://www.mitocanada.org/" >
	</asp:HyperLink>


        &nbsp;
<asp:HyperLink  style="color:#7c6954;" ID = "HyperLink2" runat=server Text="Facebook"
	NavigateUrl="https://www.facebook.com/MitoCanada/" >
	</asp:HyperLink>
         &nbsp;
<asp:HyperLink  style="color:#7c6954;" ID = "HyperLink3" runat=server Text="Twitter"
	NavigateUrl="https://twitter.com/mitocanada?lang=en">
	</asp:HyperLink>
         &nbsp;
<asp:HyperLink style="color:#7c6954;"  ID = "HyperLink4" runat=server Text="Linkedin"
	NavigateUrl="https://www.linkedin.com/company/mitocanada-foundation" >
	</asp:HyperLink>
        </td>
    </tr>
    <tr>
        <td>
            <b style="font-size:large">RelayHealth</b>
            <img src="pics/relayhealth_logo_transparent.png" style="height: 70px; width: 320px" />
        </td>
        <td>
            <p>
                RelayHealth provides the connectivity and solutions that enable constituents across healthcare to exchange information securely and conveniently. By connecting patients, providers, pharmacies, payors and pharmaceutical manufacturers, RelayHealth offers real-time solutions to streamline interactions throughout healthcare. The net result: improved care, faster access, lower costs and enhanced bottom lines.
            </p>
            <b>Links:</b>
            <asp:HyperLink style="color:#7c6954;"  ID = "HyperLink5" runat=server Text="Website"
	NavigateUrl="http://www.relayhealth.com/" >
	</asp:HyperLink>&nbsp;

            <asp:HyperLink style="color:#7c6954;"  ID = "HyperLink6" runat=server Text="Twitter "
	NavigateUrl="https://twitter.com/RelayHealth" >
	</asp:HyperLink>&nbsp;
        <asp:HyperLink style="color:#7c6954;"  ID = "HyperLink7" runat=server Text="Facebook "
	NavigateUrl="https://www.facebook.com/RelayHealth/?ref=sgm" >
	</asp:HyperLink>&nbsp;
              <asp:HyperLink style="color:#7c6954;"  ID = "HyperLink8" runat=server Text="Linkedin"
	NavigateUrl="https://www.linkedin.com/company/relayhealth" >
	</asp:HyperLink>&nbsp;
        </td>
        <tr>
            <td>
                <b style="font-size:large">MitoKind (In Development)</b>
            </td>
            <td>
               <p>mitoKIND is a place where the diagnosed and undiagnosed can not only connect to offer each other support, information, and comfort - but find people who are a match for their condition. There are so many types of mitochondrial disease and many have yet to be discovered so it is important to be able to connect to someone with your type.</p> 
                <b>Links: </b>
                <asp:HyperLink style="color:#7c6954;"  ID = "HyperLink9" runat=server Text="Website"
	NavigateUrl="https://mitokind.org/" >
	</asp:HyperLink>&nbsp;
            </td>

        </tr>


        
    </tr>
    
    </table>
</asp:Content>
