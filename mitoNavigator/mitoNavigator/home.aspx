<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="home.aspx.cs" Inherits="mitoNavigator.home" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    </asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="Body" runat="server">
   
    
    <b style="font-size:xx-large">Welcome to mitoNavigator</b><br />
    
     <div style ="float:right">
<a class="twitter-timeline" data-width="300" data-height="500" data-theme="light" href="https://twitter.com/MitoCanada">Tweets by MitoCanada</a> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
   
    &nbsp;
   
    <p style="border-style: solid; border-color: inherit; background-color:#7ac141; width: 967px;">
 <b style="font-size:x-large;color:white;">General Information</b>
        <br />
        <asp:linkbutton runat="server" style="color:#7c6954;font-size:medium" OnClick="Unnamed1_Click">What is the Mitocondria</asp:linkbutton> <br />
        <asp:linkbutton runat="server" style="color:#7c6954;font-size:medium" OnClick="Unnamed2_Click">Mitochondrial Disease / Dysfunction and Perserving Mitochondrial Health</asp:linkbutton> <br />
        <asp:linkbutton runat="server" style="color:#7c6954;font-size:medium" OnClick="Unnamed3_Click">Who are we? </asp:linkbutton>
    </p>
    



   
    



    </asp:Content>
