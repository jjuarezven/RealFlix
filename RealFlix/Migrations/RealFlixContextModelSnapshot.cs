﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace RealFlix.Migrations
{
    [DbContext(typeof(RealFlixContext))]
    partial class RealFlixContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("RealFlix.Models.Show", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<decimal?>("ExternalsImdb")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal?>("ExternalsThetvdb")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal?>("ExternalsTvrage")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("Genres")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ImageMedium")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ImageOriginal")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Keywords")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Language")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LinksNextEpisodeHref")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LinksPreviousEpisodeHref")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LinksSelfHref")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NetworkCountryCode")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NetworkCountryName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("NetworkId")
                        .HasColumnType("int");

                    b.Property<string>("NetworkName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("OfficialSite")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("Premiered")
                        .HasColumnType("datetime2");

                    b.Property<decimal?>("RatingAverage")
                        .HasColumnType("decimal(18,2)");

                    b.Property<int?>("Runtime")
                        .HasColumnType("int");

                    b.Property<string>("ScheduledDays")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ScheduledTime")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Summary")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("Updated")
                        .HasColumnType("datetime2");

                    b.Property<string>("Url")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("WebChannel")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("Weight")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Show");
                });
#pragma warning restore 612, 618
        }
    }
}
