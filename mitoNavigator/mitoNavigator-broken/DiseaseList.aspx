<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="DiseaseList.aspx.cs" Inherits="mitoNavigator.DiseaseList" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <style type="text/css">
        .auto-style1 {
            width: 1197px;
        }
        .auto-style2 {
            width: 866px;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Body" runat="server">

    <div style="text-align:center">

<b style="font-size:x-large">Welcome to the disease list </b><br />
    <p>Select a primary mitocondrial disease from the dropdown list below to learn more about it.<br />
    <b>Disclaimer: The purpose of this website is to educate. If you believe that you or a loved one is suffering from any of these diseases please contact your doctor</b>


    </p>

    <br />
    <b>Pick a disease  : </b>
    <asp:dropdownlist runat="server" OnSelectedIndexChanged="Unnamed1_SelectedIndexChanged" ID="DiseaseListDrop">
        <asp:ListItem Text="Alpers Disease" Value="1"></asp:ListItem>
        <asp:ListItem Text="Friedreich Ataxia" Value="2"></asp:ListItem>
        <asp:ListItem Text="Leigh Syndrome" Value="3"> </asp:ListItem>
        <asp:ListItem Text="Luft Disease" Value="4"></asp:ListItem>
        <asp:ListItem Text="MELAS" Value="5"></asp:ListItem>
        <asp:ListItem Text="Menkes Disease" Value ="6"></asp:ListItem>
        <asp:ListItem Text="MERRF" Value="7"></asp:ListItem>
        <asp:ListItem Text="NARP" Value="8"></asp:ListItem>
        <asp:ListItem Text="Mitochondrial Myopathy" Value="9"></asp:ListItem>
         <asp:ListItem Text="MNGIE" Value="10"></asp:ListItem>
    </asp:dropdownlist>
        <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Select" />
    <br />
    <div style="text-align:center">
 <table border="2">
           <tr>
        <td class="auto-style2">
            <b>Disease Name </b>
        </td>
        <td class="auto-style1">
            <asp:Label ID="lblName" runat="server"></asp:Label>
        </td>
    </tr>
           <tr>
        <td class="auto-style2">
            <b>Symptoms</b>
        </td>
        <td class="auto-style1">
            <asp:Label ID="lblSymptoms" runat="server"></asp:Label>
        </td>
    </tr>
           <tr>
        <td class="auto-style2">
            <b>Description</b>
        </td>
        <td class="auto-style1">
            <asp:Label ID="lblDescription" runat="server"></asp:Label>
        </td>
    </tr>
       </table>
        <asp:Label ID="Source" runat="server"></asp:Label>
        <asp:hyperlink ID="SourceLink" runat="server">Source </asp:hyperlink>

    </div>
      
    </div>
    
    

</asp:Content>
