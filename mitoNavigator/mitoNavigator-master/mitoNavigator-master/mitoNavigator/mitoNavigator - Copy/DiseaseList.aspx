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
    <p>Select a primary mitocondrial disease from the dropdown list below to learn more about it.</p>

    <br />
    <b>Pick a disease  : </b>
    <asp:dropdownlist runat="server">
        <asp:ListItem>Alpers Disease</asp:ListItem>
        <asp:ListItem>Friedreich Ataxia</asp:ListItem>
        <asp:ListItem>Leigh Syndrome </asp:ListItem>
        <asp:ListItem>Luft Disease </asp:ListItem>
        <asp:ListItem>MELAS</asp:ListItem>
        <asp:ListItem>Menkes Disease </asp:ListItem>
        <asp:ListItem>MERRF</asp:ListItem>
        <asp:ListItem>MNGIE</asp:ListItem>
        <asp:ListItem>NARP</asp:ListItem>
    </asp:dropdownlist>
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


    </div>
      
    </div>
    
    

</asp:Content>
