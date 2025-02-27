import React from "react";

export default function Templates({onClose}) {
  function formalLetter() {
    document.getElementById("textarea").value = `
[Date]

From: [Sender Name]
[Title] | [Company] | [Address] | [City] | [State] | [Zip]

To: [Recipient Name]
[Title] | [Company] | [Address] | [City] | [State] | [Zip]

Dear [Recipient Name]:

// Letter Content

Sincerely,
[Your Name]
[Title]

        `;
  }

  function informalLetter() {
    document.getElementById("textarea").value = `
[Street]

[Area]

[City]

[Date]


Dear [Name],

// Letter Content

Lots of Love
[Your Name]
      `;
  }
  function referenceLetter() {
    document.getElementById("textarea").value = `
[Address of the person who is reffering]

[Date]

[Address of other company]

Dear [Name]: 

It's my pleasure to recommend [Name] for the position of [Position] at your company. [Name] and I worked together for just over [duration] years when she was a [position] in my department at [Company name]. 

// Other Content

I recommend [Name] without reservations. Please do not hesitate to reach out with any questions. You can reach me at [Email / Contact]

Sincerely, 

[Name] (signature hard copy letter)

[Name]
      `;
  }
  function coverLetter() {
    document.getElementById("textarea").value = `
[Today's Date]

[Hiring Manager's Name]
[Company's Address]
[Contact Details]

Dear [Mr./Ms./Mrs.] [Hiring Manager's Name],

[Intro]

[Body Paragraph]

[Call to Action / Closing ]

Sincerely,
[Your Name]
      `;
  }
  return (
    <div className="bg-zinc-900 w-40 h-max p-2 mb-44 fixed text-center rounded-t-lg flex flex-col">
      <p className="mb-1" onClick={() => formalLetter() & onClose()}>
        Formal Letter
      </p>
      <p className="mb-1" onClick={() => informalLetter() & onClose()}>
        Informal Letter
      </p>
      <p className="mb-1" onClick={() => referenceLetter() & onClose()}>Reference Letter</p>
      <p className="mb-1" onClick={() => coverLetter() & onClose()}>Cover Letter</p>
    </div>
  );
}
