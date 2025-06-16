using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ImageFetcherAPI.Migrations
{
    /// <inheritdoc />
    public partial class init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "TCSA");

            migrationBuilder.CreateTable(
                name: "Cats",
                schema: "TCSA",
                columns: table => new
                {
                    RowId = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    Id = table.Column<string>(type: "TEXT", maxLength: 30, nullable: false),
                    Name = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    Url = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    Width = table.Column<int>(type: "INTEGER", maxLength: 6, nullable: false),
                    Height = table.Column<int>(type: "INTEGER", maxLength: 6, nullable: false),
                    Breeds = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cats", x => x.RowId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cats",
                schema: "TCSA");
        }
    }
}
