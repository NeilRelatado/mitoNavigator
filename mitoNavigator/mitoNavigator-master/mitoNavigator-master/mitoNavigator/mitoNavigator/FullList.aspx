<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="FullList.aspx.cs" Inherits="mitoNavigator.FullList" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Body" runat="server">
    <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" DataSourceID="List">
    <Columns>
        <asp:BoundField DataField="Name" HeaderText="Name" SortExpression="Name" />
        <asp:BoundField DataField="Description" HeaderText="Description" SortExpression="Description" />
        <asp:BoundField DataField="Symptoms" HeaderText="Symptoms" SortExpression="Symptoms" />
    </Columns>
</asp:GridView>
<asp:SqlDataSource ID="List" runat="server" ConnectionString="<%$ ConnectionStrings:DiseaseListConnectionString %>" SelectCommand="SELECT [Name], [Description], [Symptoms] FROM [List] ORDER BY [Name], [Description], [Symptoms]"></asp:SqlDataSource>
</asp:Content>
