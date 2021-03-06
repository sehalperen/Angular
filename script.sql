USE [master]
GO
/****** Object:  Database [CustomerDB]    Script Date: 19.12.2021 23:12:49 ******/
CREATE DATABASE [CustomerDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'CustomerDB', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\CustomerDB.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'CustomerDB_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\CustomerDB_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [CustomerDB] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [CustomerDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [CustomerDB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [CustomerDB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [CustomerDB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [CustomerDB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [CustomerDB] SET ARITHABORT OFF 
GO
ALTER DATABASE [CustomerDB] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [CustomerDB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [CustomerDB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [CustomerDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [CustomerDB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [CustomerDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [CustomerDB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [CustomerDB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [CustomerDB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [CustomerDB] SET  ENABLE_BROKER 
GO
ALTER DATABASE [CustomerDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [CustomerDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [CustomerDB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [CustomerDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [CustomerDB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [CustomerDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [CustomerDB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [CustomerDB] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [CustomerDB] SET  MULTI_USER 
GO
ALTER DATABASE [CustomerDB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [CustomerDB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [CustomerDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [CustomerDB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [CustomerDB] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [CustomerDB] SET QUERY_STORE = OFF
GO
USE [CustomerDB]
GO
/****** Object:  Table [dbo].[CustomerPer]    Script Date: 19.12.2021 23:12:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CustomerPer](
	[CustomerID] [int] IDENTITY(1,1) NOT NULL,
	[CusName] [nvarchar](20) NULL,
	[CusSurname] [nvarchar](30) NULL,
	[IdentityNumber] [char](11) NULL,
	[IsUnique] [bit] NULL,
 CONSTRAINT [PK_CustomerPer] PRIMARY KEY CLUSTERED 
(
	[CustomerID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Details]    Script Date: 19.12.2021 23:12:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Details](
	[IdCus] [int] IDENTITY(1,1) NOT NULL,
	[CusPhone] [bigint] NULL,
	[CusAdress] [text] NULL,
	[Customer_ID] [int] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[CustomerPer] ON 

INSERT [dbo].[CustomerPer] ([CustomerID], [CusName], [CusSurname], [IdentityNumber], [IsUnique]) VALUES (2, N'Yusuf', N'surmeli', N'656556     ', 0)
SET IDENTITY_INSERT [dbo].[CustomerPer] OFF
GO
SET IDENTITY_INSERT [dbo].[Details] ON 

INSERT [dbo].[Details] ([IdCus], [CusPhone], [CusAdress], [Customer_ID]) VALUES (1, 5658565, N'mimar sinan', 1)
INSERT [dbo].[Details] ([IdCus], [CusPhone], [CusAdress], [Customer_ID]) VALUES (3, 0, N'0', 0)
INSERT [dbo].[Details] ([IdCus], [CusPhone], [CusAdress], [Customer_ID]) VALUES (11, 11111, N'Ahmet Şimşek', 2)
INSERT [dbo].[Details] ([IdCus], [CusPhone], [CusAdress], [Customer_ID]) VALUES (12, 2321313, N'adsaddsa', 0)
INSERT [dbo].[Details] ([IdCus], [CusPhone], [CusAdress], [Customer_ID]) VALUES (13, 32123123, N'sasdeeeeee', 0)
INSERT [dbo].[Details] ([IdCus], [CusPhone], [CusAdress], [Customer_ID]) VALUES (14, 3131313131, N'bababababa', 0)
INSERT [dbo].[Details] ([IdCus], [CusPhone], [CusAdress], [Customer_ID]) VALUES (15, 3123123213, N'ssssseeeeee', 0)
INSERT [dbo].[Details] ([IdCus], [CusPhone], [CusAdress], [Customer_ID]) VALUES (16, 323323, N'sadasdasd', 0)
INSERT [dbo].[Details] ([IdCus], [CusPhone], [CusAdress], [Customer_ID]) VALUES (17, 3213123, N'dasdasd', 4)
INSERT [dbo].[Details] ([IdCus], [CusPhone], [CusAdress], [Customer_ID]) VALUES (21, 13123, N'asdasd', 8)
INSERT [dbo].[Details] ([IdCus], [CusPhone], [CusAdress], [Customer_ID]) VALUES (22, 9999, N'Mehmet Şimşek sK', 0)
INSERT [dbo].[Details] ([IdCus], [CusPhone], [CusAdress], [Customer_ID]) VALUES (23, 4345435, N'asdasdd', 7)
INSERT [dbo].[Details] ([IdCus], [CusPhone], [CusAdress], [Customer_ID]) VALUES (26, 22222, N'Ahmet Şimşek', 0)
INSERT [dbo].[Details] ([IdCus], [CusPhone], [CusAdress], [Customer_ID]) VALUES (18, 0, N'asdasd', 1)
INSERT [dbo].[Details] ([IdCus], [CusPhone], [CusAdress], [Customer_ID]) VALUES (19, 11222, N'Ahmet Şimşek', 0)
INSERT [dbo].[Details] ([IdCus], [CusPhone], [CusAdress], [Customer_ID]) VALUES (20, 3, N'asdasd', 0)
SET IDENTITY_INSERT [dbo].[Details] OFF
GO
USE [master]
GO
ALTER DATABASE [CustomerDB] SET  READ_WRITE 
GO
