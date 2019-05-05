namespace Backend.Controllers.Api
{
    using System;
    using Backend.Models;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Configuration;

    [Produces("application/json")]
    [Route("api/settings/")]
    public class SettingsController : Controller
    {

        public SettingsController(IConfiguration configuration)
        {
            this._configuration = configuration;
        }

        private IConfiguration _configuration { get; }

        [HttpGet("Get")]
        public IActionResult Get()
        {
            IActionResult result = this.StatusCode(500);
            string message = string.Empty;

            var model = new FrontendSettings();

            try
            {

                this._configuration.GetSection("AzureAd").Bind(model);

                result = this.Ok(model);
            }
            catch (Exception ex)
            {
                message = $"Failed. Error in Settings.Get. {ex.Message}";
                result = this.StatusCode(500, message);
            }

            return result;
        }
    }
}