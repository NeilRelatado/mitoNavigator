USE [master]
GO
/****** Object:  Database [DiseaseList]    Script Date: 3/22/2017 11:23:27 PM ******/
CREATE DATABASE [DiseaseList]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'DiseaseList', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL13.NEIL\MSSQL\DATA\DiseaseList.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'DiseaseList_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL13.NEIL\MSSQL\DATA\DiseaseList_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [DiseaseList] SET COMPATIBILITY_LEVEL = 130
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [DiseaseList].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [DiseaseList] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [DiseaseList] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [DiseaseList] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [DiseaseList] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [DiseaseList] SET ARITHABORT OFF 
GO
ALTER DATABASE [DiseaseList] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [DiseaseList] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [DiseaseList] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [DiseaseList] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [DiseaseList] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [DiseaseList] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [DiseaseList] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [DiseaseList] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [DiseaseList] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [DiseaseList] SET  DISABLE_BROKER 
GO
ALTER DATABASE [DiseaseList] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [DiseaseList] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [DiseaseList] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [DiseaseList] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [DiseaseList] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [DiseaseList] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [DiseaseList] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [DiseaseList] SET RECOVERY FULL 
GO
ALTER DATABASE [DiseaseList] SET  MULTI_USER 
GO
ALTER DATABASE [DiseaseList] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [DiseaseList] SET DB_CHAINING OFF 
GO
ALTER DATABASE [DiseaseList] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [DiseaseList] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [DiseaseList] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'DiseaseList', N'ON'
GO
ALTER DATABASE [DiseaseList] SET QUERY_STORE = OFF
GO
USE [DiseaseList]
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
GO
USE [DiseaseList]
GO
/****** Object:  Table [dbo].[List]    Script Date: 3/22/2017 11:23:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[List](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NOT NULL,
	[Description] [varchar](1000) NOT NULL,
	[Symptoms] [varchar](1000) NOT NULL,
 CONSTRAINT [PK_List] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Users]    Script Date: 3/22/2017 11:23:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Username] [nvarchar](50) NOT NULL,
	[Password] [nvarchar](50) NOT NULL
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[List] ON 

INSERT [dbo].[List] ([ID], [Name], [Description], [Symptoms]) VALUES (1, N'Leighs Disease', N'A rare disorder that affects the central nervous system. The disease most likely to occurs during an infant’s initial birth year, but may occur between the ages of two years and younger. 
', N'General symptoms for infants include: diarrhea, vomiting, and dysphagia (trouble swallowing or sucking), leading to a failure to thrive. 
Early symptoms shows that the children are irritable and cry more often than normal and seizures possibility.')
INSERT [dbo].[List] ([ID], [Name], [Description], [Symptoms]) VALUES (2, N'Friedreichs Ataxia (FRDA)', N'Is a genetic, progressive, neurodegenerative movement disorders with a mean age of onset between 10 and 15 years. It is often associated cardiomyopathy, a disease of a cardiac muscle that leads to heart failure ,which could present as short upon exertion. Clinical findings and symptoms have found  that  FRDA is a result from degenerative changes in the sensory nerve fibers at the spine in structures known as dorsal root ganglia.', N'Ataxia involves inadequate muscle coordination that leads to unsteady in an unsteady gain , and poor control of muscle coordination. Muscles in the throat and mouth may lead to slurred speech. Lateral or sideways curvature of the spine ( scoliosis) or foot abnormalities may occur.')
INSERT [dbo].[List] ([ID], [Name], [Description], [Symptoms]) VALUES (3, N'MERRF syndrome', N'An extremely rare disease that affects the muscles and the nervous system.', N' Related symptoms involve: progressive myoclonic epilepsy, short stature, hearing loss, lactic acidosis, exercise intolerance, and poor night vision; in addition, the disease shows Ragged Red Fibers - clumps of diseased mitochondria accumulate in the subsarcolemmal region of the muscle fiber and appear as "Ragged Red Fibers" when muscle is stained with modified Gömöri trichrome stain')
INSERT [dbo].[List] ([ID], [Name], [Description], [Symptoms]) VALUES (4, N'NARP', N'Neuropathy, ataxia, and retinitis pigmentosa (NARP) causes signs and symptoms that will affect the nervous system', N'General symptoms are numbness, tingling, or pain in the arms and legs, muscle weakness, and ataxia. Possible loss of vision, which has a possibility of causing a condition called retinitis pigmentosa, which will cause the light-sensing cells of a retina to gradually deteriorate.')
INSERT [dbo].[List] ([ID], [Name], [Description], [Symptoms]) VALUES (5, N'MNGIE', N'Mitochondrial neurogastrointestinal encephalopathy (MNGIE) can affect several parts of the body, but usually the digestive system and the nervous system. This disease can appear from an infant to an adult and can worsen in time.', N'Certain things that can happen in your digestive system is gastrointestinal dysmotility (Muscles and nerves of the digestive system do not move food through the digestive tracks well). This causes you to feel full despite eating little, trouble swallowing, nausea and vomiting. Certain things that can happen in your nervous system is tingling, numbness, and weakness in their limbs usually in the hands and feet, droopy eyelids, and hearing loss.')
INSERT [dbo].[List] ([ID], [Name], [Description], [Symptoms]) VALUES (6, N'Luft Disease', N'Also known as Hyper metabolic mitochondrial syndrome, is characterized as severe hyper-methbolism and heat intorlerance. Hyper-metabolism is the inusual increased rate of metabolic activity in the human body', N'Patients diagnosed with with Luft’s disease may experience a wide array of symptoms. Some of the most common ones are: Muscle weakness, excessive perspiration, hyper-metabolism, lack of loss, and more.')
SET IDENTITY_INSERT [dbo].[List] OFF
USE [master]
GO
ALTER DATABASE [DiseaseList] SET  READ_WRITE 
GO
