import React, { useState, useEffect, useRef, useCallback } from "react";

function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef(null);
  const lastActiveRef = useRef(null);
  const openRef = useRef(open);

  useEffect(() => {
    openRef.current = open;
  }, [open]);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    close();
  };

  const copyText = (text) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    close();
  };

  const commands = [
    { label: "Go to Home", hint: "section", action: () => scrollToId("hero") },
    { label: "Go to Experience", hint: "section", action: () => scrollToId("experience") },
    { label: "Go to Education", hint: "section", action: () => scrollToId("education") },
    { label: "Go to Skills", hint: "section", action: () => scrollToId("skills") },
    { label: "Go to Projects", hint: "section", action: () => scrollToId("projects") },
    { label: "Go to Contact", hint: "section", action: () => scrollToId("contact") },
    { label: "Copy email address", hint: "clipboard", action: () => copyText("hsenhydr007@gmail.com") },
    {
      label: "Open GitHub profile",
      hint: "↗",
      action: () => {
        window.open("https://github.com/Hsenhydr", "_blank");
        close();
      },
    },
    {
      label: "Open LinkedIn profile",
      hint: "↗",
      action: () => {
        window.open("https://linkedin.com/in/hsenhydr", "_blank");
        close();
      },
    },
    {
      label: "Download CV (PDF)",
      hint: "download",
      action: () => {
        window.open("/Hussein_Haidar_CV.pdf", "_blank");
        close();
      },
    },
  ];

  const filtered = commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()));

  const close = useCallback(() => {
    setOpen(false);
    if (lastActiveRef.current && lastActiveRef.current.focus) {
      lastActiveRef.current.focus();
    }
  }, []);

  const openPalette = useCallback(() => {
    lastActiveRef.current = document.activeElement;
    setQuery("");
    setSelected(0);
    setOpen(true);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current && inputRef.current.focus(), 10);
    }
  }, [open]);

  useEffect(() => {
    setSelected(0);
  }, [query]);

  useEffect(() => {
    function handleKeyDown(e) {
      const k = e.key.toLowerCase();
      if ((e.metaKey || e.ctrlKey) && k === "k") {
        e.preventDefault();
        if (openRef.current) {
          close();
        } else {
          openPalette();
        }
      } else if (e.key === "Escape" && openRef.current) {
        close();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("cmdk:open", openPalette);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("cmdk:open", openPalette);
    };
  }, [close, openPalette]);

  function handleInputKeyDown(e) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((prev) => Math.min(prev + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered[selected]) filtered[selected].action();
    } else if (e.key === "Escape") {
      close();
    }
  }

  return (
    <div
      className={`cmdk-overlay${open ? " open" : ""}`}
      aria-hidden={!open}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="cmdk-modal" role="dialog" aria-modal="true" aria-label="Command palette">
        <div className="cmdk-input-row">
          <span className="cmdk-prompt">›</span>
          <input
            ref={inputRef}
            className="cmdk-input"
            placeholder="Jump to a section, copy email, open a profile…"
            autoComplete="off"
            tabIndex={open ? 0 : -1}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleInputKeyDown}
          />
          <kbd className="cmdk-esc">esc</kbd>
        </div>
        <ul className="cmdk-list">
          {filtered.length === 0 ? (
            <li className="cmdk-empty">No matching command</li>
          ) : (
            filtered.map((cmd, i) => (
              <li
                key={cmd.label}
                className={`cmdk-item${i === selected ? " selected" : ""}`}
                onMouseEnter={() => setSelected(i)}
                onClick={cmd.action}
              >
                <span>{cmd.label}</span>
                <span className="cmdk-hint">{cmd.hint}</span>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default CommandPalette;
