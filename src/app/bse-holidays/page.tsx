"use client";

import Layout from "@/components/layout/Layout";
import SEO from "@/components/common/SEO";

const BseHolidays = () => {
  return (
    <Layout>
      <SEO
        title="BSE Holiday List 2026 | Stockstrail"
        description="Complete list of official BSE trading holidays for 2026 including national, festival, and weekend holidays across Equity, Equity Derivatives, SLB, Commodity Derivatives, and EGR segments."
        url="/bse-holidays"
      />

      <div className="pt-20 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <h1 className="text-4xl sm:text-5xl font-normal text-center mb-4 gradient-text font-product-sans uppercase">
            BSE Holiday List 2026
          </h1>

          <p className="text-white/80 mb-6 font-work-sans">
            The Bombay Stock Exchange (BSE) observes trading holidays on major national and
            state holidays. Below is the BSE holiday list for 2026 — covering Equity, Equity Derivatives, and SLB segments.
          </p>

          {/* Data sources */}
          {(() => {
            const equityData = [
              { holiday: "Republic Day", date: "January 26, 2026", day: "Monday" },
              { holiday: "Holi", date: "March 03, 2026", day: "Tuesday" },
              { holiday: "Shri Ram Navami", date: "March 26, 2026", day: "Thursday" },
              { holiday: "Shri Mahavir Jayanti", date: "March 31, 2026", day: "Tuesday" },
              { holiday: "Good Friday", date: "April 03, 2026", day: "Friday" },
              { holiday: "Dr. Baba Saheb Ambedkar Jayanti", date: "April 14, 2026", day: "Tuesday" },
              { holiday: "Maharashtra Day", date: "May 01, 2026", day: "Friday" },
              { holiday: "Bakri Id", date: "May 28, 2026", day: "Thursday" },
              { holiday: "Muharram", date: "June 26, 2026", day: "Friday" },
              { holiday: "Ganesh Chaturthi", date: "September 14, 2026", day: "Monday" },
              { holiday: "Mahatma Gandhi Jayanti", date: "October 02, 2026", day: "Friday" },
              { holiday: "Dussehra", date: "October 20, 2026", day: "Tuesday" },
              { holiday: "Diwali - Balipratipada", date: "November 10, 2026", day: "Tuesday" },
              { holiday: "Prakash Gurpurb Sri Guru Nanak Dev", date: "November 24, 2026", day: "Tuesday" },
              { holiday: "Christmas", date: "December 25, 2026", day: "Friday" },
            ];

            const weekendData = [
              { holiday: "Mahashivratri", date: "February 15, 2026", day: "Sunday" },
              { holiday: "Id-Ul-Fitr (Ramadan Eid)", date: "March 21, 2026", day: "Saturday" },
              { holiday: "Independence Day", date: "August 15, 2026", day: "Saturday" },
              { holiday: "Diwali Laxmi Pujan*", date: "November 08, 2026", day: "Sunday" },
            ];

            const commodityData = [
              { date: "January 01, 2026", day: "Thursday", description: "New Year's Day", morning: "Open", evening: "Closed" },
              { date: "January 26, 2026", day: "Monday", description: "Republic Day", morning: "Closed", evening: "Closed" },
              { date: "March 03, 2026", day: "Tuesday", description: "Holi", morning: "Closed", evening: "Open" },
              { date: "March 26, 2026", day: "Thursday", description: "Shri Ram Navami", morning: "Closed", evening: "Open" },
              { date: "March 31, 2026", day: "Tuesday", description: "Shri Mahavir Jayanti", morning: "Closed", evening: "Open" },
              { date: "April 03, 2026", day: "Friday", description: "Good Friday", morning: "Closed", evening: "Closed" },
              { date: "April 14, 2026", day: "Tuesday", description: "Dr.Baba Saheb Ambedkar Jayanti", morning: "Closed", evening: "Open" },
              { date: "May 01, 2026", day: "Friday", description: "Maharashtra Day", morning: "Closed", evening: "Open" },
              { date: "May 28, 2026", day: "Thursday", description: "Bakri Id", morning: "Closed", evening: "Open" },
              { date: "June 26, 2026", day: "Friday", description: "Muharram", morning: "Closed", evening: "Open" },
              { date: "September 14, 2026", day: "Monday", description: "Ganesh Chaturthi", morning: "Closed", evening: "Open" },
              { date: "October 02, 2026", day: "Friday", description: "Mahatma Gandhi Jayanti", morning: "Closed", evening: "Closed" },
              { date: "October 20, 2026", day: "Tuesday", description: "Dussehra", morning: "Closed", evening: "Open" },
              { date: "November 10, 2026", day: "Tuesday", description: "Diwali Balipratipada", morning: "Closed", evening: "Open" },
              { date: "November 24, 2026", day: "Tuesday", description: "Prakash Gurpurb Sri Guru Nanak Dev", morning: "Closed", evening: "Open" },
              { date: "December 25, 2026", day: "Friday", description: "Christmas", morning: "Closed", evening: "Closed" },
            ];

            return (
              <>
                {/* Main Holiday Table */}
                <div className="bg-stockstrail-bg-light/20 rounded-lg border border-white/5 p-4">
                  {/* Desktop/Table view */}
                  <table className="w-full text-left hidden md:table">
                    <thead>
                      <tr>
                        <th className="text-white font-montserrat text-xs lg:text-sm uppercase pb-3">Holidays</th>
                        <th className="text-white font-montserrat text-xs lg:text-sm uppercase pb-3">Date</th>
                        <th className="text-white font-montserrat text-xs lg:text-sm uppercase pb-3">Day</th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-white/5">
                      {equityData.map((row) => (
                        <tr key={`${row.holiday}-${row.date}`} className="hover:bg-white/3 transition-colors">
                          <td className="py-2 lg:py-3 text-white whitespace-normal wrap-break-word">{row.holiday}</td>
                          <td className="py-2 lg:py-3 text-white/80 whitespace-normal wrap-break-word">{row.date}</td>
                          <td className="py-2 lg:py-3 text-white/80 whitespace-normal wrap-break-word">{row.day}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* Mobile/Card view */}
                  <div className="md:hidden space-y-3">
                    {equityData.map((row) => (
                      <div key={`${row.holiday}-${row.date}`} className="rounded-md border border-white/10 bg-stockstrail-bg-light/10 p-3">
                        <div className="flex items-center justify-between">
                          <span className="text-white font-medium text-sm">{row.holiday}</span>
                          <span className="text-white/70 text-xs">{row.day}</span>
                        </div>
                        <div className="mt-1 text-white/80 text-xs">{row.date}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Weekend Holidays */}
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                  BSE Holidays That Fall on Saturday or Sunday in 2026
                </h2>

                <div className="bg-stockstrail-bg-light/20 rounded-lg border border-white/5 p-4">
                  {/* Desktop/Table view */}
                  <table className="w-full text-left hidden md:table">
                    <thead>
                      <tr>
                        <th className="text-white font-montserrat text-xs lg:text-sm uppercase pb-3">Holiday</th>
                        <th className="text-white font-montserrat text-xs lg:text-sm uppercase pb-3">Date</th>
                        <th className="text-white font-montserrat text-xs lg:text-sm uppercase pb-3">Day</th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-white/5">
                      {weekendData.map((row) => (
                        <tr key={`${row.holiday}-${row.date}`} className="hover:bg-white/3 transition-colors">
                          <td className="py-2 lg:py-3 text-white whitespace-normal wrap-break-word">{row.holiday}</td>
                          <td className="py-2 lg:py-3 text-white/80 whitespace-normal wrap-break-word">{row.date}</td>
                          <td className="py-2 lg:py-3 text-white/80 whitespace-normal wrap-break-word">{row.day}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* Mobile/Card view */}
                  <div className="md:hidden space-y-3">
                    {weekendData.map((row) => (
                      <div key={`${row.holiday}-${row.date}`} className="rounded-md border border-white/10 bg-stockstrail-bg-light/10 p-3">
                        <div className="flex items-center justify-between">
                          <span className="text-white font-medium text-sm">{row.holiday}</span>
                          <span className="text-white/70 text-xs">{row.day}</span>
                        </div>
                        <div className="mt-1 text-white/80 text-xs">{row.date}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Notes and Market Timings */}
                <div className="mt-8 text-white/80">
                  <p className="mb-4">
                    NOTE: Muhurat Trading will be conducted on Sunday, November 08, 2026. The specific session timings will be announced later.
                  </p>

                  <h3 className="text-xl font-semibold text-white mt-4 mb-2">BSE Market Timings</h3>
                  <div className="bg-stockstrail-bg-light/10 p-4 rounded-md border border-white/5">
                    <ul className="text-white/80 list-disc pl-5 space-y-2">
                      <li>
                        <strong>Pre-Open Session:</strong> Modification/order entry: 09:00 AM to 09:15 AM.
                      </li>
                      <li>
                        <strong>Regular Trading Session:</strong> Market Open: 09:15 AM, Market Close: 03:30 PM.
                      </li>
                      <li>
                        <strong>Block Deal Session:</strong> Morning Window: 08:45 AM to 09:00 AM; Afternoon Window: 02:05 PM to 02:20 PM.
                      </li>
                      <li>
                        <strong>Closing Session:</strong> 03:40 PM to 04:00 PM.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Commodity Derivatives & EGR Segment Holidays 2026 */}
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                  BSE Holidays 2026: Commodity Derivatives Segment and Electronic Gold Receipts (EGR)
                </h2>

                <div className="bg-stockstrail-bg-light/20 rounded-lg border border-white/5 p-4">
                  {/* Desktop/Table view */}
                  <table className="w-full text-left hidden md:table">
                    <thead>
                      <tr>
                        <th className="text-white font-montserrat text-xs lg:text-sm uppercase pb-3">Date</th>
                        <th className="text-white font-montserrat text-xs lg:text-sm uppercase pb-3">Day</th>
                        <th className="text-white font-montserrat text-xs lg:text-sm uppercase pb-3">Holiday</th>
                        <th className="text-white font-montserrat text-xs lg:text-sm uppercase pb-3">Morning (9–5)</th>
                        <th className="text-white font-montserrat text-xs lg:text-sm uppercase pb-3">Evening (5–11:30/11:55)</th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-white/5">
                      {commodityData.map((row) => (
                        <tr key={`${row.date}-${row.description}`} className="hover:bg-white/3 transition-colors">
                          <td className="py-2 lg:py-3 text-white/80 whitespace-normal wrap-break-word">{row.date}</td>
                          <td className="py-2 lg:py-3 text-white/80 whitespace-normal wrap-break-word">{row.day}</td>
                          <td className="py-2 lg:py-3 text-white whitespace-normal wrap-break-word">{row.description}</td>
                          <td className="py-2 lg:py-3 text-white/80 whitespace-normal wrap-break-word">{row.morning}</td>
                          <td className="py-2 lg:py-3 text-white/80 whitespace-normal wrap-break-word">{row.evening}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* Mobile/Card view */}
                  <div className="md:hidden space-y-3">
                    {commodityData.map((row) => (
                      <div key={`${row.date}-${row.description}`} className="rounded-md border border-white/10 bg-stockstrail-bg-light/10 p-3">
                        <div className="flex items-center justify-between">
                          <span className="text-white font-medium text-sm">{row.description}</span>
                          <span className="text-white/70 text-xs">{row.day}</span>
                        </div>
                        <div className="mt-1 text-white/80 text-xs">{row.date}</div>
                        <div className="mt-3 grid grid-cols-2 gap-2">
                          <div className="rounded bg-white/5 p-2">
                            <div className="text-white/70 text-[11px]">Morning (9–5)</div>
                            <div className="text-white text-sm">{row.morning}</div>
                          </div>
                          <div className="rounded bg-white/5 p-2">
                            <div className="text-white/70 text-[11px]">Evening (5–11:30/11:55)</div>
                            <div className="text-white text-sm">{row.evening}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            );
          })()}
          
        </div>
      </div>
    </Layout>
  );
};

export default BseHolidays;
