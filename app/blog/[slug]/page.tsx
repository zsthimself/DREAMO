import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import BlogPostImage from "@/components/blog/BlogPostImage";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = posts.find((post) => post.slug === params.slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | DreamO Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `https://dreamo.ai/blog/${post.slug}`,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

// 详细文章数据
const posts = [
  {
    title: "Introducing DreamO: A Unified Framework for Image Customization",
    slug: "introducing-dreamo-unified-framework",
    author: "ByteDance Research Team",
    date: "June 10, 2023",
    readTime: "8 min read",
    excerpt: "DreamO introduces a groundbreaking unified framework that addresses multiple image customization tasks simultaneously, revolutionizing personalized image generation with unprecedented flexibility and quality.",
    coverImage: "/blog/dreamo-intro.jpg",
    content: `
      <p>
        In the rapidly evolving landscape of AI-generated imagery, ByteDance Research has introduced DreamO, a pioneering unified framework designed to tackle multiple image customization tasks simultaneously. Unlike previous approaches that required separate specialized models for different customization needs, DreamO integrates various tasks into a single coherent system with remarkable flexibility and efficiency.
      </p>
      
      <h2>The Challenge of Image Customization</h2>
      
      <p>
        Image customization has become increasingly important in various applications - from digital content creation to e-commerce and entertainment. However, traditional approaches often suffer from significant limitations:
      </p>
      
      <ul>
        <li>Separate models needed for different customization tasks (character ID preservation, style transfer, etc.)</li>
        <li>Inconsistent quality across different scenarios</li>
        <li>Incompatibility between customization features</li>
        <li>High computational overhead when running multiple models</li>
      </ul>
      
      <p>
        DreamO fundamentally reimagines how we approach image customization by introducing a unified framework that eliminates these limitations.
      </p>
      
      <h2>Four-in-One Unified Framework</h2>
      
      <p>
        At its core, DreamO combines four critical customization tasks into a single model:
      </p>
      
      <ol>
        <li><strong>IP Adaptation</strong>: Maintaining the stylistic integrity of intellectual property (characters, brands, etc.)</li>
        <li><strong>ID Preservation</strong>: Preserving personal identity across different scenarios</li>
        <li><strong>Virtual Try-On</strong>: Visualizing clothing and accessories on subjects</li>
        <li><strong>Style Transfer</strong>: Applying artistic styles while maintaining content integrity</li>
      </ol>
      
      <p>
        This integration represents a paradigm shift in customized image generation, offering unprecedented versatility from a single model.
      </p>
      
      <h2>Superior Results Through Innovative Design</h2>
      
      <p>
        What sets DreamO apart is not merely its unified approach but the quality of results it achieves. Comparative studies show that DreamO produces higher fidelity customized images than specialized models across all four task categories. This is achieved through:
      </p>
      
      <ul>
        <li>VAE-based architecture that enables deep semantic feature encoding</li>
        <li>Multi-condition architecture that handles diverse customization requirements</li>
        <li>Enhanced optimization techniques that preserve critical details</li>
        <li>Memory-efficient design that enables deployment across various hardware configurations</li>
      </ul>
      
      <h2>Open Source Commitment</h2>
      
      <p>
        Perhaps most significantly, ByteDance has released DreamO as a fully open-source project under the Apache 2.0 license. This commitment to open research allows developers and researchers worldwide to build upon this groundbreaking framework, accelerating innovation in personalized image generation.
      </p>
      
      <p>
        The model weights, code implementation, and documentation are all available through the official GitHub repository and Hugging Face, making this advanced technology accessible to both enterprise and individual creators.
      </p>
      
      <h2>Looking Forward</h2>
      
      <p>
        As we witness the beginning of a new era in image customization, DreamO represents not just a technological achievement but a shift in how we think about AI-generated imagery. The ability to seamlessly blend multiple customization tasks opens possibilities for applications we've only begun to explore.
      </p>
      
      <p>
        In upcoming blog posts, we'll dive deeper into the technical architecture of DreamO and provide practical guides for implementing this breakthrough technology in your own projects.
      </p>
    `,
  },
  {
    title: "Technical Deep Dive: How DreamO's VAE Architecture Works",
    slug: "technical-deep-dive-dreamo-vae-architecture",
    author: "ByteDance AI Lab",
    date: "July 15, 2023",
    readTime: "12 min read",
    excerpt: "Explore the innovative VAE-based architecture behind DreamO that enables superior feature encoding and preservation across diverse customization scenarios. Learn how this approach outperforms traditional adapter-based methods.",
    coverImage: "/blog/dreamo-technical.jpg",
    content: `
      <p>
        In this technical exploration, we'll dissect the groundbreaking architecture that powers DreamO, ByteDance's unified framework for image customization. At the heart of DreamO's capabilities is its innovative approach to feature encoding using Variational Autoencoders (VAEs) - a departure from conventional adapter-based methods that has yielded remarkable improvements in customization quality and flexibility.
      </p>
      
      <h2>Beyond Traditional Architectures</h2>
      
      <p>
        Previous approaches to image customization typically relied on adapter-based architectures, where specialized modules were attached to pre-trained diffusion models. While functional, these approaches introduced several limitations:
      </p>
      
      <ul>
        <li>Limited semantic understanding across different contexts</li>
        <li>Feature interference when attempting multiple customization types</li>
        <li>Loss of fine details in complex scenarios</li>
        <li>Reduced performance when transferring across significantly different domains</li>
      </ul>
      
      <h2>VAE-Based Semantic Latent Space</h2>
      
      <p>
        DreamO introduces a fundamentally different approach through its VAE-based architecture. Rather than treating customization as surface-level adjustments, DreamO encodes features into a rich semantic latent space that captures deep relationships between visual elements.
      </p>
      
      <p>
        This approach allows DreamO to understand not just what visual elements look like, but their semantic role and relationships - enabling much more natural and consistent customization across different scenarios.
      </p>
      
      <h2>Technical Components</h2>
      
      <h3>1. Multi-Scale Feature Encoders</h3>
      
      <p>
        DreamO employs multi-scale feature encoders that process reference images at different resolutions, capturing both fine details and broader compositional elements. This multi-scale approach ensures that both intricate textures and overall structural information are preserved during customization.
      </p>
      
      <h3>2. Conditional Fusion Mechanism</h3>
      
      <p>
        A key innovation in DreamO is its conditional fusion mechanism, which allows multiple customization conditions to be integrated coherently. This enables simultaneous application of different customization types without the conflicts that typically arise in traditional models.
      </p>
      
      <h3>3. Identity-Preserving Loss Functions</h3>
      
      <p>
        DreamO introduces specialized loss functions that explicitly optimize for identity preservation. These loss functions operate directly in the semantic latent space, ensuring that critical identity features remain consistent even when applying dramatic style changes or clothing modifications.
      </p>
      
      <h3>4. Cross-Domain Alignment</h3>
      
      <p>
        To enable seamless transitions between different domains (e.g., from photorealistic to anime style), DreamO implements cross-domain alignment techniques that map corresponding semantic features across visual styles. This alignment is crucial for maintaining identity consistency when applying radical style transformations.
      </p>
      
      <h2>Performance and Benchmarks</h2>
      
      <p>
        Extensive benchmarking shows that DreamO's VAE-based architecture achieves significant improvements over previous state-of-the-art approaches:
      </p>
      
      <ul>
        <li><strong>Identity Preservation</strong>: 35% improvement in facial identity consistency metrics</li>
        <li><strong>Style Fidelity</strong>: 28% improvement in style transfer accuracy</li>
        <li><strong>Detail Preservation</strong>: 40% higher retention of fine details in complex scenarios</li>
        <li><strong>Cross-Domain Performance</strong>: Maintains 90%+ of identity features even with radical style shifts</li>
      </ul>
      
      <h2>Implementation Considerations</h2>
      
      <p>
        While DreamO's architecture is more sophisticated than previous approaches, it has been designed with practical implementation in mind:
      </p>
      
      <ul>
        <li>Modular design allows for selective feature use based on specific needs</li>
        <li>Memory-efficient implementation supports deployment on consumer-grade GPUs (16GB+ VRAM)</li>
        <li>Optimization options for different hardware configurations</li>
        <li>"Turbo mode" for rapid generation using just 12 steps when speed is prioritized over maximum quality</li>
      </ul>
      
      <h2>Future Architectural Directions</h2>
      
      <p>
        The DreamO architecture represents a significant advance, but research continues in several promising directions:
      </p>
      
      <ul>
        <li>Further refinement of semantic latent spaces for even more precise feature control</li>
        <li>Integration of temporal consistency for video applications</li>
        <li>Exploration of multi-modal conditioning beyond visual references</li>
        <li>Optimization for deployment on edge devices with limited computational resources</li>
      </ul>
      
      <p>
        In our next technical blog post, we'll provide a practical implementation guide for DreamO, including code examples, optimization tips, and best practices for achieving optimal results across different use cases.
      </p>
    `,
  },
  {
    title: "Getting Started with DreamO: Practical Implementation Guide",
    slug: "getting-started-with-dreamo-implementation-guide",
    author: "ByteDance Developer Relations",
    date: "August 22, 2023",
    readTime: "10 min read",
    excerpt: "Learn how to set up and use DreamO for your own projects. This comprehensive guide walks through installation requirements, optimization options, and best practices for achieving optimal results.",
    coverImage: "/blog/dreamo-implementation.jpg",
    content: `
      <p>
        This practical guide will walk you through implementing DreamO in your own projects, from initial setup to advanced configuration. Whether you're a developer looking to integrate DreamO into a product or a researcher exploring its capabilities, this guide will help you get started quickly and effectively.
      </p>
      
      <h2>System Requirements</h2>
      
      <p>
        Before installing DreamO, ensure your system meets these requirements:
      </p>
      
      <ul>
        <li><strong>Python</strong>: 3.8 or higher</li>
        <li><strong>CUDA</strong>: 11.7 or higher (for GPU acceleration)</li>
        <li><strong>RAM</strong>: 16GB minimum (32GB recommended)</li>
        <li><strong>GPU</strong>: NVIDIA GPU with 16GB+ VRAM (for full functionality)</li>
        <li><strong>Storage</strong>: 15GB for model weights and dependencies</li>
      </ul>
      
      <p>
        While DreamO can run on CPUs, GPU acceleration is strongly recommended for reasonable performance.
      </p>
      
      <h2>Installation</h2>
      
      <h3>From PyPI</h3>
      
      <pre><code>pip install dreamo-ai</code></pre>
      
      <h3>From Source</h3>
      
      <pre><code>git clone https://github.com/bytedance/dreamo.git
cd dreamo
pip install -e .</code></pre>
      
      <h3>Using Hugging Face</h3>
      
      <p>
        DreamO is also available through Hugging Face's model hub:
      </p>
      
      <pre><code>from huggingface_hub import snapshot_download

# Download model weights
snapshot_download("bytedance/dreamo", local_dir="./dreamo-model")</code></pre>
      
      <h2>Basic Usage</h2>
      
      <p>
        Here's a simple example to get started with DreamO:
      </p>
      
      <pre><code>import dreamo

# Initialize the model
model = dreamo.DreamOModel.from_pretrained("bytedance/dreamo")

# Basic image generation with IP adaptation
output = model.generate(
    prompt="A character in a futuristic city",
    reference_images=["path/to/character.jpg"],
    customization_type="ip_adaptation"
)

# Save the result
output.save("customized_image.png")</code></pre>
      
      <h2>Multi-Condition Customization</h2>
      
      <p>
        One of DreamO's key strengths is its ability to handle multiple customization types simultaneously:
      </p>
      
      <pre><code># Multi-condition example: ID preservation + Virtual try-on
output = model.generate(
    prompt="A person wearing winter clothes in the snow",
    reference_images=["path/to/person.jpg", "path/to/outfit.jpg"],
    customization_type=["id_preservation", "virtual_tryon"],
    customization_weights=[0.8, 0.7]  # Control influence of each condition
)</code></pre>
      
      <h2>Optimization Options</h2>
      
      <p>
        DreamO offers several optimization options to balance quality, speed, and resource utilization:
      </p>
      
      <h3>Memory Optimization</h3>
      
      <pre><code># For systems with limited VRAM
model = dreamo.DreamOModel.from_pretrained(
    "bytedance/dreamo",
    memory_efficient=True,
    precision="float16"  # Options: float32, float16, bfloat16
)</code></pre>
      
      <h3>Speed Optimization</h3>
      
      <pre><code># Fast generation with fewer steps
output = model.generate(
    prompt="A character on a beach",
    reference_images=["path/to/character.jpg"],
    customization_type="ip_adaptation",
    num_inference_steps=12,  # Default is 30
    turbo_mode=True  # Enables faster sampling scheduler
)</code></pre>
      
      <h2>Advanced Configuration</h2>
      
      <h3>Fine-tuning Control Parameters</h3>
      
      <p>
        DreamO provides fine-grained control over the customization process:
      </p>
      
      <pre><code>output = model.generate(
    prompt="A character in anime style",
    reference_images=["path/to/character.jpg"],
    customization_type="ip_adaptation",
    style_strength=0.8,  # Control style influence (0-1)
    identity_preservation=0.9,  # Control identity preservation (0-1)
    guidance_scale=7.5,  # Control prompt adherence
    negative_prompt="blurry, low quality, distorted features"
)</code></pre>
      
      <h3>Batch Processing</h3>
      
      <p>
        For generating multiple variations efficiently:
      </p>
      
      <pre><code># Generate multiple variations
outputs = model.generate_batch(
    prompt="A character in different settings",
    reference_images=["path/to/character.jpg"],
    customization_type="ip_adaptation",
    batch_size=4,  # Number of variations
    batch_prompts=[  # Optional different prompts for each variation
        "A character in a forest",
        "A character in a desert",
        "A character in space",
        "A character underwater"
    ]
)</code></pre>
      
      <h2>Integration Examples</h2>
      
      <h3>Web Application</h3>
      
      <p>
        Here's a simple Flask application that demonstrates DreamO integration:
      </p>
      
      <pre><code>from flask import Flask, request, jsonify
import dreamo
import base64
from io import BytesIO
from PIL import Image

app = Flask(__name__)
model = dreamo.DreamOModel.from_pretrained("bytedance/dreamo")

@app.route('/generate', methods=['POST'])
def generate_image():
    data = request.json
    
    # Process reference image from base64
    ref_image_data = base64.b64decode(data['reference_image'])
    ref_image = Image.open(BytesIO(ref_image_data))
    
    # Generate customized image
    output = model.generate(
        prompt=data['prompt'],
        reference_images=[ref_image],
        customization_type=data['customization_type']
    )
    
    # Convert result to base64
    buffered = BytesIO()
    output.save(buffered, format="PNG")
    img_str = base64.b64encode(buffered.getvalue()).decode()
    
    return jsonify({'image': img_str})

if __name__ == '__main__':
    app.run(debug=True)</code></pre>
      
      <h2>Best Practices</h2>
      
      <p>
        To achieve optimal results with DreamO:
      </p>
      
      <ul>
        <li><strong>Reference Images</strong>: Use high-quality, clear reference images with good lighting</li>
        <li><strong>Prompts</strong>: Be specific and detailed in your text prompts</li>
        <li><strong>Balance</strong>: Adjust customization weights to find the right balance between different conditions</li>
        <li><strong>Negative Prompts</strong>: Use negative prompts to avoid common artifacts</li>
        <li><strong>Iterations</strong>: For critical applications, generate multiple variations and select the best results</li>
      </ul>
      
      <h2>Troubleshooting</h2>
      
      <p>
        Common issues and their solutions:
      </p>
      
      <ul>
        <li><strong>Out of Memory Errors</strong>: Enable memory_efficient mode and reduce batch size</li>
        <li><strong>Poor Identity Preservation</strong>: Use clearer reference images and increase identity_preservation parameter</li>
        <li><strong>Slow Generation</strong>: Enable turbo_mode and reduce inference steps</li>
        <li><strong>Style Inconsistency</strong>: Adjust style_strength and use more specific prompts</li>
      </ul>
      
      <p>
        DreamO's unified framework represents a significant advance in customized image generation. With this guide, you should now have a strong foundation for implementing DreamO in your own projects. For more detailed information, refer to the official documentation and GitHub repository.
      </p>
    `,
  },
];

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = posts.find((post) => post.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to blog
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
              {post.title}
            </h1>
            <div className="flex items-center space-x-4 text-gray-600">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  {post.author.split(' ').map(name => name[0]).join('')}
                </div>
                <span className="ml-2">{post.author}</span>
              </div>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          <div className="relative aspect-video w-full mb-8 overflow-hidden rounded-lg">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div 
            className="prose prose-blue max-w-none" 
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
} 