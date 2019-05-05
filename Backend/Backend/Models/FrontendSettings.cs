namespace Backend.Models
{
    using Microsoft.AspNetCore.Mvc;
    using Newtonsoft.Json;
    using System.Collections.Generic;

    public class FrontendSettings
    {
        [JsonProperty(PropertyName = "instance")]
        public string Instance { get; set; }

        [JsonProperty(PropertyName = "domain")]
        public string Domain { get; set; }

        [JsonProperty(PropertyName = "tenantId")]
        public string TenantId { get; set; }

        [JsonProperty(PropertyName = "clientId")]
        public string ClientId { get; set; }
    }
}
