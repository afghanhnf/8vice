/* 8VICE - Tweaks island (self-contained React panel).
   Applies changes imperatively to the vanilla page via window.__ hooks. */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVisual": "skyline",
  "heroAccent": "#D62828",
  "headline": "Strategic Partner In Business Excellence."
}/*EDITMODE-END*/;

const HEADLINES = {
  "Strategic Partner In Business Excellence.":
    'Strategic Partner In<br>Business <span class="accent">Excellence.</span>',
  "Indonesia. Decoded for Chinese Businesses.":
    'Indonesia.<br><span class="accent">Decoded</span> for Chinese Businesses.',
  "Build Your Indonesian Business - With People Who've Already Done It.":
    'Build Your Indonesian Business - With People Who\u2019ve <span class="accent">Already Done It.</span>',
  "Indonesia's Market, Decoded for You.":
    'Indonesia\u2019s Market, <span class="accent">Decoded</span> for You.',
  "Your Bridge to Indonesia.":
    'Your <span class="accent">Bridge</span> to Indonesia.'
};

function TweaksApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => { window.__setHeroViz && window.__setHeroViz(t.heroVisual); }, [t.heroVisual]);
  React.useEffect(() => { window.__setHeroAccent && window.__setHeroAccent(t.heroAccent); }, [t.heroAccent]);
  React.useEffect(() => {
    window.__setHeadline && window.__setHeadline(HEADLINES[t.headline] || HEADLINES[Object.keys(HEADLINES)[0]]);
  }, [t.headline]);

  return (
    <TweaksPanel>
      <TweakSection label="Hero visual" />
      <TweakRadio
        label="Style"
        value={t.heroVisual}
        options={['skyline', 'corridor', 'founder']}
        onChange={(v) => setTweak('heroVisual', v)} />
      <TweakColor
        label="Accent"
        value={t.heroAccent}
        options={['#D62828', '#C9A961', '#2A6FDB', '#FAFAF7']}
        onChange={(v) => setTweak('heroAccent', v)} />
      <TweakSection label="Hero copy" />
      <TweakSelect
        label="Headline (A/B)"
        value={t.headline}
        options={Object.keys(HEADLINES)}
        onChange={(v) => setTweak('headline', v)} />
    </TweaksPanel>
  );
}

(function mountTweaks() {
  const root = document.createElement('div');
  root.id = 'tweaks-root';
  document.body.appendChild(root);
  ReactDOM.createRoot(root).render(<TweaksApp />);
})();
