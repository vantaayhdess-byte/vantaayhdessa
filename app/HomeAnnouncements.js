import {
  eventAnnouncement,
  secondEventAnnouncement,
  breakingNews,
} from "./announcements";

function EventAnnouncement({ event, titleId }) {
  return (
    <section className="section announcement-event" aria-labelledby={titleId}>
      <div className="announcement-copy">
        <div className="eyebrow">{event.label}</div>
        <h2 id={titleId}>
          {event.title}
          {event.titleAccent && (
            <>
              <br />
              <span>{event.titleAccent}</span>
            </>
          )}
        </h2>
        {(event.when || event.where) && (
          <dl className="event-details">
            {event.when && (
              <div>
                <dt>Milloin</dt>
                <dd>{event.when}</dd>
              </div>
            )}
            {event.where && (
              <div>
                <dt>Missä</dt>
                <dd>{event.where}</dd>
              </div>
            )}
          </dl>
        )}
        {event.paragraphs.filter(Boolean).map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        {event.buttonText && event.buttonHref && (
          <a className="button" href={event.buttonHref}>
            {event.buttonText} <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
      <div className="announcement-image">
        <img
          src={event.image}
          alt={event.imageAlt}
          width="1200"
          height="800"
          loading="lazy"
          decoding="async"
          style={{
            objectFit: event.imageFit === "cover" ? "cover" : "contain",
          }}
        />
      </div>
    </section>
  );
}

// Each event and the news strip can be shown or hidden independently.
export default function HomeAnnouncements() {
  const showFirst = eventAnnouncement.visibility === "show";
  const showSecond = secondEventAnnouncement.visibility === "show";
  const showNews = breakingNews.visibility === "show";
  if (!showFirst && !showSecond && !showNews) return null;

  return (
    <div className="home-announcements">
      {showNews && (
        <aside className="breaking-news" aria-label="Ajankohtaista">
          <span className="news-label">{breakingNews.label}</span>
          <div className="news-lines">
            <p>{breakingNews.line1}</p>
            {breakingNews.line2 && <p>{breakingNews.line2}</p>}
          </div>
          {breakingNews.linkText && breakingNews.linkHref && (
            <a className="text-link" href={breakingNews.linkHref}>
              {breakingNews.linkText} <span aria-hidden="true">→</span>
            </a>
          )}
        </aside>
      )}
      {showFirst && (
        <EventAnnouncement
          event={eventAnnouncement}
          titleId="event-announcement-title"
        />
      )}
      {showSecond && (
        <EventAnnouncement
          event={secondEventAnnouncement}
          titleId="second-event-announcement-title"
        />
      )}
    </div>
  );
}
