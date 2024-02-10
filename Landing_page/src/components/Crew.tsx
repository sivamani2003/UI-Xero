const crewImages = [
  'https://s3-alpha-sig.figma.com/img/9773/1781/9bd81f9740aeb94a2b5a33dcc578550e?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dCoxrdpMQjZoRt0ivdRTTkQ2dCBHTLM8xzkV86c2Y31aSV4uQYAH07ye8jTmaxXAyuW2sZzjvrZQy1H6J1iGrGwYWRgqQWgCKbyvhkFmUvOas6QAF0gxvAX0Sa~g0tNSUZU6U03ycih1T1SOKe-pkdyKAjaBB-SXDwvvB3nVGMiTDtKP4IuofgYVIq-9sbndo3Y7DNUIFFsOulrGv8TkMrCFVjWvCDbEEYXtqTAZis0JUTEjuEQfxLL52fsxUV2jyWo9kKdMw6qHsegzLR1JzbPLNldLCLpJDUYxUjMLZ5V8DG4gj8hb0vnjklRrTA~4W14wiGipj7DBxrG0~BBRJA__',
  'https://s3-alpha-sig.figma.com/img/bcc1/7d13/dc408d58c8d51397ffd4e79338876c1a?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C2L4eUWbTg2G4CDdDqWESrsKHhYz3330e86Yd2Xr-rDc9w4f6r8TeTMOuLUQEzVwxM5KC75ErG3pSkCCnVnIOFnWCnoZrT6mMH5ZgvyQ0W5oSgwkcgUV7WPpyl8dnPW9zCW4j9-WPd1tdfx1QsjH7--bDEH8N5bF3fv1pco9NjO-G7boAiB01uyDZ~~K6Q0EqwwzYH-7MnH06IRR1on3n3kFl6IfAFtKMEPaOdoRY7hxENnDNOf4GgBgyhx2na79Gw9BlbVimBk4vbvXaiMnbVvTc8ZTLEuS0Eu1WkP33GrRbb4dX5TsuJgCC8pNYWMJVBYuF7N-jurJqVUmw3WrEA__',
  'https://s3-alpha-sig.figma.com/img/98ee/2d5d/b2fedac710b11899dd49de2e23425344?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TkOw9HEiKZcgp3zGGM9XeBkmBMArCLU-8kCt9lraDwSHEMkbl2z94P9GRfEtEymb0hb9GYVMQ2w2kc6a6hOQkU9aksRRT6yZ1Z-ZujjLN3Rd9xwtoysNrPVE0Ik-gJsnhaxpqdYwAMInyKFPVHY-FzBhV8AROfm4b7HL9XFWpndrI-P2mQIZTv8Q-nW9kUdkDc9~VvNzfK43A-XGDr9lLjyAdN4y2BGfInxj3tDSmSBSN6Gn6C0MwGL~7YRW2tA3cp-5Ae5CZ9iuYcSG5cBlOzBhQ9XkoKYQid0g1o40QGlmz5~d3PlO4cWX7DEH5s0V08z-0V3M6-rRteBPaSxD0g__',
  'https://s3-alpha-sig.figma.com/img/209f/54c9/d93369696573dd2d7a43d0048947eb01?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yj-v1G2LKEpzv2BsEdcICpEHAnWXEYRdC22u1~um~OgVxcRt~LcrOZutouyTHT7YC31mmvXqPPa4Z8fdPsbYh1LqR9vj7vbjCc8S18eMr2aMDqYFeLMxHs~Y6R-cB21CaDjDk-bpk1DtwghqUVKI~iyHvnIam0Qpq~d5pVlIGoueAalrwESL2KoOmZ3kq1Bfqm1asXE3rxHltuPjaLlReOq63kHTeFQ5OaMn9crc-y4-04Glrjyc5L8LRcEltWvfP38r3oAaxPNesONxgAmtm2MgKq~ReVdqOqpX9BZUdnRtc8q2-V82OS0qcllB~lOVDOYQ-7CLmtsNbBvbtbxLsw__',
  'https://s3-alpha-sig.figma.com/img/6569/f608/1de9b04879b2f5e0b8b3e802518673d5?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g-F3tfmPULU6HE8SvmULBDBjb5IifLOlekvdv5Hwg79Zqpnc~yyM9JwvwqP~Yt6P4aBJtwUUQt~5R4OqXtiakQ~zBqrcul-k43F3HxH80ybw55u8euFwzlT7CLA2pCkOBpCP7g14RRwIFj9gDvQfImdGZL-~LZutKth~Sm5uJ3IMQaRsGQLQUpY7T8gAqOyqyIRe2sw8N3Jf2Q9brRX-vgRYSx92NihWG4XRpKqZzbexMOtEANbjLd0yf7XHby0wUXVIEhPtSks6-fElspQWY5SXmNl-8t~-LG9zlbvVXyXAWWxT2ZDL6lgqqaMe646U4w4V5O-6igdbyT8Rz7ccvg__'
];

const crewTitles = [
  'Software Developers',
  'QA Engineers',
  'UX Designers',
  'Data Scientists',
  'Project Managers'
];

function Crew(): JSX.Element {
  return (
    <div>
      <div className='pics-container'>
        {crewImages.map((src, index) => (
          <img key={index} src={src} alt='' />
        ))}
      </div>
      <div className='pic-names'>
        {crewTitles.map((title, index) => (
          <p key={index}>{title}</p>
        ))}
      </div>
      <div className='pics-info'>
        <h2>Let's Form Your Crew.</h2>
      </div>
      <p className='schedule_call_2'>Schedule a Call</p>
    </div>
  );
}

export default Crew;
