using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RealFlix.Models
{
    public class Show
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Url { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Type { get; set; }
        public string Language { get; set; }
        [Required]
        public string Genres { get; set; }
        [Required]
        public string Status { get; set; }
        [Required]
        public int Runtime { get; set; }
        public DateTime Premiered { get; set; }
        public string OfficialSite { get; set; }
        [Required]
        public string ScheduledTime { get; set; }
        [Required]
        public string ScheduledDays { get; set; }
        public decimal RatingAverage { get; set; }
        public int Weight { get; set; }
        public int NetworkId { get; set; }
        public string NetworkName { get; set; }
        public string NetworkCountryName { get; set; }
        public string NetworkCountryCode { get; set; }
        public string WebChannel { get; set; }
        public decimal ExternalsTvrage { get; set; }
        public decimal ExternalsThetvdb { get; set; }
        public decimal ExternalsImdb { get; set; }
        public string ImageMedium { get; set; }
        [Required]
        public string ImageOriginal { get; set; }
        [Required]
        public string Summary { get; set; }
        public DateTime Updated { get; set; }
        public string LinksSelfHref { get; set; }
        public string LinksPreviousEpisodeHref { get; set; }
        public string LinksNextEpisodeHref { get; set; }
        public string Keywords { get; set; }

    }
}
