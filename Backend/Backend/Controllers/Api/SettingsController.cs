using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Helpers;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers.Api
{
    [Produces("application/json")]
    [Route("api/settings/")]
    public class SettingsController : Controller
    {

        public SettingsController()
        {
        }

        [HttpGet("Get")]
        public IActionResult Get()
        {
            IActionResult result = this.StatusCode(500);
            string message = string.Empty;

            try
            {

                var model = new List<SettingItemViewModel>();

                model.Add(new SettingItemViewModel()
                {
                    Setting = "instance",
                    Value = SettingsHelper.AppSetting["AzureAd:Instance"]
                });

                model.Add(new SettingItemViewModel()
                {
                    Setting = "tenantId",
                    Value = SettingsHelper.AppSetting["AzureAd:TenantId"]
                });

                model.Add(new SettingItemViewModel()
                {
                    Setting = "clientId",
                    Value = SettingsHelper.AppSetting["AzureAd:ClientId"]
                });

                model.Add(new SettingItemViewModel()
                {
                    Setting = "redirectUri",
                    Value = SettingsHelper.AppSetting["Angular:RedirectUri"]
                });

                model.Add(new SettingItemViewModel()
                {
                    Setting = "baseUrl",
                    Value = SettingsHelper.AppSetting["Angular:BaseUrl"]
                });

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