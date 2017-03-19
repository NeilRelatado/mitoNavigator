<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="home.aspx.cs" Inherits="mitoNavigator.home" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <style type="text/css">
        #rssOutput {
            margin-left: 930px;
        }
    </style>
    </asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="Body" runat="server" >
   
    
    <b style="font-size:xx-large">Welcome to mitoNavigator
    </b><br />
    <b style="font-size:medium">What is MitoNavigator </b>
    <p>MitoNavigator is your first step in learning more about mitocondrial diseases. Here you can learn more about mitocondrial diseases and organizations that are dedicated to finding a cure. Whether </p>
    
     <div style ="float:right; height: 56px; margin-left: 72px; display:inline">

   
<a class="twitter-timeline" data-width="300" data-height="500" data-theme="light" href="https://twitter.com/MitoCanada">Tweets by MitoCanada</a> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>


          

          </div>
   
    

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </span><br></div></div>&nbsp;<div style="float:left;border-style: solid; border-color: inherit; background-color:#7ac141; width: 836px; height: 73px;">
    <b style="font-size:x-large;color:white;">Find us on social media </b>
        <br />
<asp:HyperLink ID = "HyperLink1" runat=server Text="Facebook"
	NavigateUrl="https://www.facebook.com/MitoCanada/" >
	</asp:HyperLink>
         &nbsp;
<asp:HyperLink ID = "HyperLink2" runat=server Text="Twitter"
	NavigateUrl="https://twitter.com/mitocanada?lang=en">
	</asp:HyperLink>
         &nbsp;
<asp:HyperLink ID = "HyperLink3" runat=server Text="Linkedin"
	NavigateUrl="https://www.linkedin.com/company/mitocanada-foundation" >
	</asp:HyperLink>
&nbsp;</div>

   <br />

    <br />
    <br />
    <p style="border-style: solid; border-color: inherit; background-color:#7ac141; width: 836px;">
        <b style="font-size:x-large;color:white;">General Information</b>
        <br />
        <asp:linkbutton runat="server" style="color:#7c6954;font-size:medium" OnClick="Unnamed1_Click">What is the Mitocondria</asp:linkbutton> <br />
        <asp:linkbutton runat="server" style="color:#7c6954;font-size:medium" OnClick="Unnamed2_Click">Mitochondrial Disease / Dysfunction and Perserving Mitochondrial Health</asp:linkbutton> <br />
        <asp:linkbutton runat="server" style="color:#7c6954;font-size:medium" OnClick="Unnamed3_Click">Who are we? </asp:linkbutton><br />
        <asp:linkbutton runat="server" style="color:#7c6954;font-size:medium" OnClick="Unnamed4_Click">Genetics and Mitocondrial disease </asp:linkbutton><br />
    </p>
    



    <br />

 

    <p style="width: 836px;">

      
 <a data-width="836" data-height="500"></a><b style="font-size:x-large">News   </b><script type="text/javascript" src="http://output92.rssinclude.com/output?type=js&amp;id=1123378&amp;hash=01fc99f8d3946809296a07b6511daefa"></script>



    </p>
    <br />

   
    
    


    </asp:Content>
