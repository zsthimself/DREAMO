import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Layout from "@/components/layout/Layout";
import { ArticleStructuredData } from "@/components/ui/structured-data";
import BlogPostImage from "@/components/blog/BlogPostImage";

export const dynamic = "force-static";

// Blog post interface definition
interface BlogPost {
  title: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
  content: string;
}

// Blog post content data (in a real project, this might come from a database or CMS)
const blogPosts: Record<string, BlogPost> = {
  "dia-by-nari-labs-new-leader-in-ai-voice": {
    title: "Dia by Nari Labs: The New Leader in AI Voice Technology",
    date: "May 15, 2024",
    author: "Nari Labs Team",
    category: "AI Voice Technology",
    imageUrl: "/blog/dia-nari-labs-voice.svg",
    content: `
      <h2>The Dark Horse That's Redefining AI Voice Capabilities</h2>
      
      <p>
        In recent weeks, a significant shift has occurred in the AI voice technology landscape with the emergence of Dia by Nari Labs. This newcomer, developed by a small team of relatively inexperienced developers, has quickly established itself as a formidable competitor to industry giants like Eleven Labs and Sesame. According to experts who have tested the technology, Dia isn't just competing with these established players—it's surpassing them in critical areas of voice synthesis.
      </p>
      
      <h3>An Unexpected Origin Story</h3>
      
      <p>
        What makes Dia's rise particularly compelling is its grassroots development story. Unlike many AI breakthroughs that emerge from well-funded labs or technology giants, Dia was created as a passion project by two developers with relatively limited experience. The founders were inspired by the capabilities of Notebook LM but found themselves constrained by the limitations of existing technologies.
      </p>
      
      <p>
        Perhaps most remarkable is how the project was built: entirely open-source, with no external funding. The team leveraged TPU processing power made available by Google and utilized resources from Hugging Face's ZeroGPU grant program. This bootstrap approach stands in stark contrast to the typical AI development model that relies on massive funding rounds and proprietary technology.
      </p>
      
      <blockquote>
        "This is a true AI marketing navigator type of story in that it started as an AI passion project that was inspired by the capabilities of Notebook LM and then was somewhat driven by the limitations of the existing technologies like Notebook LM and like Eleven Labs."
      </blockquote>
      
      <h3>What Sets Dia Apart: Emotional Expression and Non-verbal Communication</h3>
      
      <p>
        While most text-to-speech models focus on accurately converting text into spoken words, Dia distinguishes itself through its extraordinary ability to capture the subtle nuances of human speech. Industry experts who have conducted comparative testing between Dia and market leaders like Eleven Labs have noted a significant gap in quality, particularly when it comes to emotional expression.
      </p>
      
      <p>
        The most striking differentiator is Dia's handling of non-verbal sounds—an aspect of communication that other AI voice models typically struggle with. Through a simple yet revolutionary text tag system, Dia can incorporate laughs, coughs, throat clears, and other non-verbal elements that make human speech sound natural and authentic.
      </p>
      
      <blockquote>
        "It's the small subtle sounds, the small intonation and rhythms that really make all the difference... specifically with one really amazing feature and that is the ability to insert nonverbal sounds like coughs or throat clears, laughs all via text tag which is pretty remarkable."
      </blockquote>
      
      <p>
        In direct comparison tests, the difference is immediately apparent. When generating laughter, for instance, competitors like Eleven Labs simply read "haha" as text, while Dia produces a natural-sounding laugh. This capability creates a level of emotional resonance previously unattainable in AI-generated speech.
      </p>
      
      <blockquote>
        "I think it was pretty clear that Dia was far and away the most natural. Obviously, it's the only one that didn't simply read 'haha'—it actually laughed in a natural way."
      </blockquote>
      
      <h3>Technical Specifications and Accessibility</h3>
      
      <p>
        From a technical standpoint, Dia currently operates with 1.6 billion parameters—an impressive scale considering its bootstrapped development. While this is smaller than some commercial models, the quality achieved suggests highly efficient training and model architecture.
      </p>
      
      <p>
        Currently, Dia is available through GitHub and Hugging Face repositories, with a demonstration site for testing. This approach prioritizes open access to the technology but comes with trade-offs in terms of user experience and accessibility. Unlike polished commercial platforms like Eleven Labs, working with Dia requires more technical knowledge, making it less immediately accessible to casual users.
      </p>
      
      <blockquote>
        "Where Dia is absolutely still not really competing with Eleven Labs or the bigger players in the game is on the availability and accessibility of the tool... it's much harder and much more technical to get at with any deep testing capability than an Eleven Labs for instance."
      </blockquote>
      
      <p>
        The current feature set is relatively streamlined, focusing on core functionality rather than extensive customization options. Users can control speaker tags to delineate between multiple speakers and insert non-verbal tags, but the platform doesn't yet offer the full suite of customization options found in more mature platforms.
      </p>
      
      <h3>Audio Sample Extension: A Promising Capability</h3>
      
      <p>
        Another notable capability that Dia demonstrates is audio sample extension. From a short initial audio clip—as brief as 3 seconds—the model can expand and generate longer content while maintaining the voice characteristics. This feature has significant implications for users who want to maintain consistent voice profiles across multiple scripts or extend limited voice samples.
      </p>
      
      <p>
        This approach to voice cloning from minimal input represents a powerful tool for content creators who may have limited original audio to work with but need extended voice generation capabilities.
      </p>
      
      <h3>Applications and Future Potential</h3>
      
      <p>
        The implications of Dia's advancements extend across numerous industries and use cases. For marketing professionals, there's enormous potential in creating more engaging audio content, developing customer-facing AI agents, and producing podcast-style content that sounds authentically human.
      </p>
      
      <p>
        Beyond marketing, the applications range from video game character voices to storytelling applications, movie dubbing, and television show localization. The ability to incorporate natural emotional expression and non-verbal elements opens new creative possibilities that were previously inaccessible with AI voice technology.
      </p>
      
      <blockquote>
        "A huge application obviously being content creation and specifically when it comes to audio podcasts, otherwise all sorts of voice and any sort of customer-facing agent that you might be using in your marketing or in your sales department... That's not to mention the non-marketing creative use cases like video games and storytelling and movie and television show dubbing."
      </blockquote>
      
      <h3>The Evolving Landscape of AI Voice Technology</h3>
      
      <p>
        Dia's emergence represents a significant inflection point in the development of AI voice technology. By establishing new benchmarks for emotional expression and non-verbal communication, it challenges established players to improve their offerings and accelerates innovation across the industry.
      </p>
      
      <p>
        The open-source nature of the project also democratizes access to cutting-edge voice technology, potentially enabling a new wave of applications and use cases from developers who previously couldn't afford premium voice services.
      </p>
      
      <h3>Conclusion: A New Chapter in AI Voice Technology</h3>
      
      <p>
        While Dia by Nari Labs is still in the early stages of its development and lacks some of the polished user experience of more established platforms, its core technology represents a remarkable achievement. The gap in quality between Dia and current industry leaders in emotional expression and non-verbal communication suggests we're witnessing the emergence of a new leader in AI voice technology.
      </p>
      
      <p>
        For content creators, marketers, and technology enthusiasts, Dia offers a glimpse into the future of AI-generated speech—one where the subtle nuances of human communication are preserved rather than flattened. As the platform matures and becomes more accessible, it has the potential to reshape how we think about and interact with AI-generated voice content.
      </p>
      
      <blockquote>
        "What this does mean is a significant step forward in AI voice in text-to-speech and for us as AI marketing navigators who are creating audio content with AI, that is amazing news."
      </blockquote>
    `,
  },
  "nari-labs-dia-1-6b-tts-model-review": {
    title: "Nari Labs DIA-1.6B: A Revolutionary Open-Source TTS Model for Realistic Dialogues",
    date: "May 10, 2024",
    author: "Nari Labs Team",
    category: "AI Technology",
    imageUrl: "/blog/nari-labs-dia-model.svg",
    content: `
      <h2>Introducing DIA-1.6B: The Future of Multi-Speaker Dialogue Generation</h2>
      
      <p>
        In the rapidly evolving landscape of text-to-speech (TTS) technology, Nari Labs has recently released a groundbreaking model that promises to change how we approach dialogue generation. The DIA-1.6B, an open-source and open-weight model designed for local use, offers impressive capabilities in creating realistic multi-speaker dialogues complete with non-verbal communication elements.
      </p>
      
      <h3>Breaking New Ground in Open-Source TTS</h3>
      
      <p>
        The DIA-1.6B model represents a significant advancement in the open-source TTS ecosystem. Unlike many commercial offerings that require subscription fees or cloud-based processing, DIA-1.6B is fully open-source under the Apache 2.0 license, making it highly accessible to developers, hobbyists, and independent creators.
      </p>
      
      <p>
        What truly sets this model apart is its specialized focus on dialogue generation. While most TTS systems excel at single-voice narration, DIA-1.6B allows users to designate different speakers for different lines in a script, effectively simulating natural conversations or podcast-style interactions. This capability opens up exciting possibilities for content creators, game developers, and multimedia producers looking to add authentic vocal elements to their projects.
      </p>
      
      <h3>Multi-Speaker Dialogue: A Game-Changer for Content Creation</h3>
      
      <p>
        The core functionality of DIA-1.6B is its ability to generate realistic multi-speaker dialogues from transcripts. Users can denote different speakers to handle different lines, creating audio that closely resembles natural conversation flows. This feature is particularly valuable for:
      </p>
      
      <ul>
        <li><strong>Indie game developers</strong> seeking to add voice acting to cutscenes and character interactions</li>
        <li><strong>Podcast creators</strong> looking to prototype episodes or create supplemental content</li>
        <li><strong>Educational content developers</strong> wanting to produce dialogue-based learning materials</li>
        <li><strong>Accessibility specialists</strong> working to convert written dialogues into audio formats</li>
      </ul>
      
      <p>
        Initial tests have confirmed that the model handles multiple speakers smoothly, with successful implementation of even a third speaker in dialogue scenarios.
      </p>
      
      <h3>Beyond Words: Non-Verbal Communication</h3>
      
      <p>
        Perhaps one of the most innovative aspects of DIA-1.6B is its support for non-verbal communication elements. The model can generate various non-verbal sounds that significantly enhance the realism of dialogues, including:
      </p>
      
      <ul>
        <li>Laughter</li>
        <li>Coughing</li>
        <li>Throat clearing</li>
        <li>Other emotional vocalizations</li>
      </ul>
      
      <p>
        Early testing shows mixed results with some emotional tags, but laughter generation in particular has been noted as "very good." These elements add a layer of authenticity that has typically been missing from AI-generated speech, bringing TTS technology one step closer to mimicking the nuances of human conversation.
      </p>
      
      <h3>Technical Requirements: Running DIA-1.6B Locally</h3>
      
      <p>
        As an open-weight model designed for local deployment, DIA-1.6B requires specific hardware capabilities:
      </p>
      
      <ul>
        <li><strong>VRAM Requirements:</strong> Approximately 10GB of video RAM for the full version</li>
        <li><strong>Tested Hardware:</strong> Successfully runs on consumer-grade GPUs like the 3090 series</li>
        <li><strong>Apple Silicon Compatibility:</strong> Reports indicate successful operation on Apple Silicon machines with sufficient memory</li>
        <li><strong>Model Size:</strong> The weight files are approximately 6.5GB</li>
      </ul>
      
      <p>
        During testing, VRAM utilization stabilized around 7.4GB during generation, though total VRAM usage gradually increased throughout extended testing sessions. Generation speed varies based on audio length and the presence of emotional tags.
      </p>
      
      <h3>User Interface and Generation Parameters</h3>
      
      <p>
        The model launches with a Gradio-based web interface that provides a straightforward user experience. Through this UI, users can:
      </p>
      
      <ul>
        <li>Input dialogue text with speaker designations</li>
        <li>Include emotional tags for non-verbal elements</li>
        <li>Adjust generation parameters such as speed factor</li>
        <li>Set maximum generation length</li>
      </ul>
      
      <p>
        Preliminary testing suggests that parameter adjustments can significantly impact the quality and characteristics of the generated speech. For instance, increasing the speed factor may alter voice characteristics in unexpected ways, suggesting that users should experiment with these settings to find the optimal configuration for their specific needs.
      </p>
      
      <h3>The Impact of Text Formatting</h3>
      
      <p>
        One interesting observation from early testing is how the model responds to text formatting elements. The DIA-1.6B appears to interpret emotional tags placed in parentheses as cues to generate corresponding sound effects. Additionally, punctuation seems to play an important role in guiding the cadence and tone of the generated speech.
      </p>
      
      <p>
        This sensitivity to formatting suggests that users might achieve better results by strategically incorporating punctuation and emotional cues in their input text. Future research and community experimentation will likely yield best practices for optimizing text formatting for this model.
      </p>
      
      <h3>Part of a Promising Trend</h3>
      
      <p>
        The release of DIA-1.6B reflects a broader trend in the TTS landscape, where open-source models are steadily improving in quality and capabilities. For hobbyists and professionals who prefer offline, open-source solutions, this upward trajectory is tremendously encouraging.
      </p>
      
      <p>
        What makes DIA-1.6B particularly noteworthy is how it addresses specific use cases that commercial services often neglect or charge premium fees to access. By focusing on dialogue generation and non-verbal elements, Nari Labs has created a tool that fills an important gap in the open-source TTS ecosystem.
      </p>
      
      <h3>Conclusion: A Valuable Addition to the Open-Source Toolkit</h3>
      
      <p>
        Nari Labs' DIA-1.6B represents an impressive achievement in open-source text-to-speech technology. Its specialized focus on multi-speaker dialogues and inclusion of non-verbal communication elements makes it a valuable tool for content creators, especially those working in independent game development or media production.
      </p>
      
      <p>
        While the model does require decent hardware resources and still has room for improvement in certain aspects of non-verbal generation, its open-source nature and subscription-free approach make it an attractive option worth exploring. As the community experiments with the model and develops optimized workflows, we can expect to see increasingly impressive results from this powerful new tool.
      </p>
      
      <p>
        For those interested in exploring DIA-1.6B, the weight files are available on Hugging Face, and the model can be deployed using the provided quick-start scripts, which early testers report offer one of the "simplest installation processes" compared to other open-source TTS solutions.
      </p>
    `,
  },
  "dia-tts-model": {
    title: "DIA: An Open-Source TTS Model Surpassing ElevenLabs",
    date: "February 25, 2024",
    author: "Nari Labs Team",
    category: "AI Technology",
    imageUrl: "/blog/dia-tts-model.svg",
    content: `
      <h2>Revolutionary Open-Source TTS Technology: The DIA Model Explained</h2>
      
      <p>
        A small revolution is quietly taking place in the field of AI voice synthesis. DIA, an open-source text-to-speech (TTS) model developed by a team of just two undergraduates with zero funding, is challenging industry giant ElevenLabs with its exceptional performance. This model is not only a demonstration of technical capability but also powerful proof of the potential of the open-source community.
      </p>
      
      <h3>DIA: A New Height in Emotional Expression</h3>
      
      <p>
        Compared to existing TTS models on the market, DIA shows clear advantages in three key areas: emotional tone, dialogue fluency, and non-verbal realism. Through multiple comparative tests, DIA significantly outperforms well-known models like ElevenLabs and Sesame in generating speech with natural pauses, emotional variations, and fluid conversations.
      </p>
      
      <p>
        One reviewer commented after comparing the same dialogue generated by different models: "ElevenLabs is noticeably worse in terms of pauses between sentences and the tone and emotion in the voice." Another reviewer pointed out: "Well, the dialogue between characters definitely doesn't have the chemistry like Dia does." These evaluations reveal DIA's outstanding ability to capture the complex and subtle characteristics of human dialogue.
      </p>
      
      <h3>Small Team, Big Breakthrough</h3>
      
      <p>
        Surprisingly, DIA was developed by a small team consisting of only two undergraduate students who accomplished this feat without any external funding. As one commentator marveled: "It's hard to imagine that this team open-sourced this model without funding, and it can compete with Google and ElevenLabs who have millions of dollars in funding?"
      </p>
      
      <p>
        The inspiration for this project came from the team's love for Google NotebookLM's podcast feature, but they wanted more control over voice and script. One of the founders, Toby Kim, said: "It all started when we fell in love with Notebook LM's podcast feature when it was released last year, but we wanted more control. More control over voices, more freedom over scripts. We tried all the TTS APIs on the market. None of them sounded like real human conversations."
      </p>
      
      <h3>Technical Challenges and Innovative Breakthroughs</h3>
      
      <p>
        During development, the team's biggest challenge was computing power. Fortunately, Google provided access to TPUs through their Research Cloud program, offering crucial support for the project. The team had to quickly learn multiple technologies, including JAX, Flax, parallel computing, cluster orchestration, and Pallas kernels. They also referenced scaling guides from DeepMind and Hugging Face to optimize model performance.
      </p>
      
      <h3>Open-Source, Lightweight, and Powerful</h3>
      
      <p>
        The most impressive feature of the DIA model is that it's completely open-source and open-weight, meaning anyone can run it on their own computer without particularly powerful hardware. According to information provided by the team, running DIA requires only about 10GB of VRAM, making it easily accessible to ordinary developers and enthusiasts.
      </p>
      
      <p>
        In terms of functionality, DIA offers the following features:
      </p>
      
      <ul>
        <li>Dialogue generation capability (using S1 and S2 markers to distinguish speakers)</li>
        <li>Non-verbal sound generation (laughter, coughing, etc.)</li>
        <li>Some degree of voice cloning functionality</li>
        <li>Voice control through audio prompts</li>
        <li>Various generation parameters for adjustment (such as temperature, guidance strength, etc.)</li>
      </ul>
      
      <p>
        Although DIA still has room for improvement in some aspects—such as being mainly optimized for two-person dialogues, potentially too fast for single-person scripts, and occasional technical issues with the online platform—it has already achieved a qualitative leap in the field of open-source TTS.
      </p>
      
      <h3>Broad Application Prospects</h3>
      
      <p>
        The DIA team plans to develop the model into a consumer-facing application for generating interesting conversations, remixing content, and sharing with friends. Industry observers also see DIA's application potential in multiple fields:
      </p>
      
      <ul>
        <li>Content creation and media production</li>
        <li>Multilingual training material development</li>
        <li>Website reading applications</li>
        <li>Customer support automation (such as appointment scheduling and general inquiry handling)</li>
      </ul>
      
      <h3>Conclusion: The Power of Open Source</h3>
      
      <p>
        The emergence of DIA represents a major breakthrough in open-source TTS technology, providing users with a free and powerful tool for generating realistic, expressive dialogues. Although the model is still in its early stages, its impressive performance already challenges existing proprietary TTS models. DIA's open-source nature and relatively low hardware requirements will undoubtedly promote the democratization of voice synthesis technology, paving the way for broader innovation and application.
      </p>
      
      <p>
        As AI voice technology continues to evolve, open-source projects like DIA demonstrate the enormous potential of community-driven innovation. It reminds us that even small teams, with innovative ideas and persistent effort, can create astonishing results in the technology field.
      </p>
    `,
  },
};

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // Get the blog post data
  const post = blogPosts[params.slug];
  
  // If the post doesn't exist, return a basic title
  if (!post) {
    return {
      title: "Blog Post Not Found - Nari Labs"
    };
  }
  
  // Extract the first paragraph for description (remove HTML tags)
  const firstParagraph = post.content
    .split("<p>")[1]?.split("</p>")[0]
    .replace(/<[^>]*>/g, "")
    .trim()
    .substring(0, 160);
  
  return {
    title: `${post.title} | Nari Labs Blog`,
    description: firstParagraph,
    keywords: `${post.category}, Nari Labs, text-to-speech, AI voice, ${post.title.toLowerCase().replace(/[^\w\s]/gi, '').split(' ').join(', ')}`,
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
    openGraph: {
      title: post.title,
      description: firstParagraph,
      url: `https://narilabs.com/blog/${params.slug}`,
      siteName: "Nari Labs",
      locale: "en_US",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.imageUrl,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: firstParagraph,
      images: [post.imageUrl]
    }
  };
}

export function generateStaticParams() {
  // 返回所有可能的slug参数
  return [
    { slug: "dia-by-nari-labs-new-leader-in-ai-voice" },
    { slug: "nari-labs-dia-1-6b-tts-model-review" },
    { slug: "dia-tts-model" }
  ];
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];
  
  // If the post doesn't exist, show a 404 page
  if (!post) {
    notFound();
  }
  
  // Extract the first paragraph for description (remove HTML tags)
  const firstParagraph = post.content
    .split("<p>")[1]?.split("</p>")[0]
    .replace(/<[^>]*>/g, "")
    .trim()
    .substring(0, 160);
  
  return (
    <Layout>
      <ArticleStructuredData
        headline={post.title}
        image={`https://narilabs.com${post.imageUrl}`}
        datePublished={new Date(post.date).toISOString()}
        author={{
          name: post.author,
          url: "https://narilabs.com/about"
        }}
        publisher={{
          name: "Nari Labs",
          logo: "https://narilabs.com/logo.svg"
        }}
        description={firstParagraph}
        url={`https://narilabs.com/blog/${params.slug}`}
      />
      
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Link href="/blog" className="text-blue-600 hover:underline mb-4 inline-block">
            ← Back to Blog
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-2">{post.title}</h1>
          
          <div className="flex items-center text-gray-600 mb-4">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.author}</span>
            <span className="mx-2">•</span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {post.category}
            </span>
          </div>
          
          <BlogPostImage 
            src={post.imageUrl} 
            alt={post.title}
          />
        </div>
        
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-semibold mb-4">Share this article</h3>
          <div className="flex space-x-4">
            <a 
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://narilabs.com/blog/${params.slug}`)}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500"
              aria-label="Share on Twitter"
            >
              Twitter
            </a>
            <a 
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://narilabs.com/blog/${params.slug}`)}&title=${encodeURIComponent(post.title)}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700"
              aria-label="Share on LinkedIn"
            >
              LinkedIn
            </a>
            <a 
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://narilabs.com/blog/${params.slug}`)}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600"
              aria-label="Share on Facebook"
            >
              Facebook
            </a>
          </div>
        </div>
      </article>
    </Layout>
  );
} 