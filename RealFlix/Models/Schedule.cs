using System;

namespace RealFlix.Models
{
    public class Schedule
    {
        public DateTime Time { get; set; }
        public Days Days { get; set; }
    }

    public enum Days
    {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
}
