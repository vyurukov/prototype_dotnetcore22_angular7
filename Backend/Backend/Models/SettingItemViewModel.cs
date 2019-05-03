namespace Backend.Models
{
    using Microsoft.AspNetCore.Mvc;
    using Newtonsoft.Json;
    using System.Collections.Generic;

    public class SettingItemViewModel
    {
        [JsonProperty(PropertyName = "setting")]
        public string Setting { get; set; }

        [JsonProperty(PropertyName = "value")]
        public string Value { get; set; }
    }
}
