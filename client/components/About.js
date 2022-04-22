import React from "react";

import { NavLink } from "react-router-dom";

const About = (props) => {
  return (
    <>
    <div className="about container d-flex flex-column align-items-center mt-5">
      <h1 className="mb-3">FireBrick</h1>
      <h4>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h4>
      <h5>"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</h5>
      <hr className="w-100"/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan ligula eget tellus ultricies, ut vehicula dolor tempor. Vivamus augue augue, lacinia nec hendrerit vitae, auctor et ex. Nunc ac varius odio. Aliquam porttitor non urna id pulvinar. Nulla blandit tincidunt sem nec tincidunt. Nam ut consequat ante. Sed non lorem at arcu vestibulum malesuada. Donec cursus, odio ut elementum tincidunt, eros sapien hendrerit ex, ut auctor arcu tortor convallis lacus. Suspendisse at maximus odio.</p>
      <p>In enim nulla, tempus at tellus cursus, condimentum ullamcorper ligula. Duis quis urna nec nulla gravida venenatis ac vitae risus. Curabitur non ultricies nulla. In congue felis mauris, vel egestas nunc vehicula nec. Maecenas semper dolor urna, ac tincidunt metus convallis vitae. Duis tellus nulla, dictum a finibus sed, lobortis non arcu. Pellentesque fermentum nulla nec risus imperdiet feugiat non sit amet est.</p>
      <p>Quisque et dignissim elit. Curabitur elementum neque vel ex feugiat, quis pellentesque ex condimentum. Nullam id vehicula eros. Etiam bibendum aliquam purus in blandit. Vivamus dui nisi, aliquet quis luctus id, laoreet non arcu. Quisque sodales libero nec dolor accumsan, a finibus libero lobortis. Nam a felis sit amet metus fermentum varius vitae nec quam. Vestibulum semper dignissim odio non consectetur. Vestibulum lectus lectus, ullamcorper non tincidunt in, dictum ac est. Sed posuere elit sed odio finibus, ultrices vehicula tellus viverra. Fusce laoreet diam in lectus fermentum pulvinar. Fusce leo ante, varius eu eros ac, faucibus blandit ante.

</p>
    <hr className="w-100"/>
    {/* should be link belows */}
    <p>help@firebrick.com</p>
    <p>Privacy Policy</p>
    </div>
    </>
  );
};
export default About;
