namespace Backend.Helpers
{
    using System;
    using System.IO;
    using Microsoft.Extensions.Configuration;

    static class SettingsHelper
    {
        public static IConfiguration AppSetting { get; }
        static SettingsHelper()
        {
            AppSetting = new ConfigurationBuilder()
                    .SetBasePath(Directory.GetCurrentDirectory())
                    .AddJsonFile("appsettings.json")
                    .Build();
        }
    }
}
