import type { NextApiRequest, NextApiResponse } from "next";

export default function twitter(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json({
    hide_upgrade: "",
    is_premium: false,
    v_chart: [99.729919, 0.270081],
    p_chart: [99.269781, 0.730219],
    plan_f: "5,000",
    plan: "FREE",
    name: "borovik.eth 🦶🎃",
    s_name: "3orovik",
    profile_image:
      "https://pbs.twimg.com/profile_images/1587194722619166720/9vY6txCW_200x200.png",
    loc: "🦇🔊",
    url: "https://linktr.ee/borovik",
    join: "21 March 2021",
    des: "#BAYC 9743 | #Punk 3938 | BTC class of 2017 | Artist 🎨 | blood cancer 🩸| Not Financial Advice | RT = paid promo | DM 4 promo 📩",
    tweets: 20543,
    tweetsp: "20.5K",
    likes: 51540,
    likesp: "51.5K",
    fower: 49725,
    fowerp: "49.7K",
    foing: 1180,
    foingp: "1.2K",
    last_update: 191,
    fa_score: 99.8049415,
    fake_p: 20.19,
    verified_p: 5.27,
    act_p: 64.53,
    inact_p : 10.01,
    av_fa_score: "88.77",
    quality: [
      0, 0.01000300090027008, 0, 0.13003901170351106, 0.24007202160648194, 0,
      0.9002700810243073, 6.24187256176853, 0, 48.2444733420026,
      44.2332699809943,
    ],
    unev_val: "2,523",
    no_bio_val: "404",
    les_tw_val: "31",
    de_img_val: "16",
    les_fo_val: "37",
    inact_val: "1",
    no_url_val: "3,821",
    no_loc_val: "2,281",
    fake_u_val: "212",
  });
}
