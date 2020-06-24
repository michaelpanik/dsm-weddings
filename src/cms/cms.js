import CMS from "netlify-cms-app"

import { BlogPostTemplatePreview } from "../templates/blog-post"

CMS.registerPreviewTemplate("blog", BlogPostTemplatePreview);