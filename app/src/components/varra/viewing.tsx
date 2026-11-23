import { useState } from "react";
import type { FormEvent } from "react";

import { requestViewing } from "@/lib/api/viewing.functions";

import { Reveal } from "./reveal";

type Status = "idle" | "sending" | "done" | "error";

const RESIDENCES = ["undecided", "garden", "corner", "penthouse"] as const;
type Residence = (typeof RESIDENCES)[number];

function toResidence(value: FormDataEntryValue | null): Residence {
  return RESIDENCES.find((option) => option === value) ?? "undecided";
}

export function Viewing() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") {
      return;
    }
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      await requestViewing({
        data: {
          email: String(data.get("email") ?? ""),
          message: String(data.get("message") ?? ""),
          name: String(data.get("name") ?? ""),
          phone: String(data.get("phone") ?? ""),
          residence: toResidence(data.get("residence")),
        },
      });
      form.reset();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="vr-section vr-visit" id="visit">
      <div className="vr-visit__grid">
        <Reveal className="vr-visit__text">
          <p className="vr-label">03 / Private viewings</p>
          <h2 className="vr-display">
            Arrange a <em>private visit.</em>
          </h2>
          <p className="vr-lede">
            Viewings are by appointment, in person, and take about an hour. We
            will walk the arrival, a finished residence and its terrace, and
            answer whatever you want to know.
          </p>
          <p className="vr-visit__contact">
            <span>Sales gallery open daily, 10 to 6</span>
            <span>hello@varra-residences.la</span>
          </p>
        </Reveal>

        <Reveal className="vr-visit__formwrap" delay={100}>
          {status === "done" ? (
            <div className="vr-form__done" role="status">
              <p className="vr-form__done-title">Thank you.</p>
              <p>
                Your request is with us. Someone from the sales gallery will be
                in touch within one working day to find a time.
              </p>
              <button className="vr-form__again" onClick={() => setStatus("idle")} type="button">
                Send another request
              </button>
            </div>
          ) : (
            <form className="vr-form" onSubmit={onSubmit}>
              <label>
                <span>Name</span>
                <input autoComplete="name" maxLength={120} minLength={2} name="name" required type="text" />
              </label>
              <label>
                <span>Email</span>
                <input autoComplete="email" maxLength={200} name="email" required type="email" />
              </label>
              <label>
                <span>Phone (optional)</span>
                <input autoComplete="tel" maxLength={40} name="phone" type="tel" />
              </label>
              <label>
                <span>Residence</span>
                <select defaultValue="undecided" name="residence">
                  <option value="undecided">Not sure yet</option>
                  <option value="garden">Garden residence</option>
                  <option value="corner">Corner residence</option>
                  <option value="penthouse">Penthouse</option>
                </select>
              </label>
              <label className="vr-form__wide">
                <span>Anything we should know (optional)</span>
                <textarea maxLength={2000} name="message" rows={3} />
              </label>
              <button className="vr-cta-submit" disabled={status === "sending"} type="submit">
                <span>{status === "sending" ? "Sending" : "Send request"}</span>
                <i aria-hidden="true" />
              </button>
              {status === "error" ? (
                <p className="vr-form__error" role="alert">
                  That did not go through. Please check the details and try
                  again, or write to hello@varra-residences.la.
                </p>
              ) : null}
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
