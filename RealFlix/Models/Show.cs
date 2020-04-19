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
        public string OfficialSite { get; set; }
        public string WebChannel { get; set; }
        [Required]
        public string Image { get; set; }
        [Required]
        public string Summary { get; set; }
        [Required]
        public string ScheduledTime { get; set; }
        [Required]
        public string ScheduledDays { get; set; }
        public string Keywords { get; set; }

    }
}
