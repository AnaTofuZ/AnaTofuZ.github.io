import {
  icon as faRender,
  type IconDefinition,
} from "@fortawesome/fontawesome-svg-core";
import type { FC } from "hono/jsx";

export const FontAwesomeIcon: FC<{
  icon: IconDefinition;
  class?: string;
}> = ({ icon, class: className }) => {
  const result = faRender(icon, {
    classes: className?.split(" ").filter(Boolean) ?? [],
  });
  if (!result) return null;
  return <span dangerouslySetInnerHTML={{ __html: result.html[0] }} />;
};
