type AnnouncementsProps = {
  className?: string;
};

export default function Announcements({ className }: AnnouncementsProps) {
  return (
    <section className="announcements">
      <h1 className={className}>Announcements: Finally up</h1>
      <br/>
      <p className="announcement-text">Hi all, I'm excited to announce that the site is finally up and running! I will be working on some of the 
        structure and design of the site over the next few weeks, but I wanted to go ahead and get it up for now. It truly is about time!
      </p>
    </section>
  );
}