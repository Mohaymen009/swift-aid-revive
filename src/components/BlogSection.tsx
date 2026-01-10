import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BlogSection = () => {
    const posts = [
        {
            title: "How to Choose the Right Ambulance Service",
            excerpt: "Key factors to consider when selecting a medical transport provider in the UAE, from accreditation to response times.",
            date: "Jan 5, 2026",
            author: "EMRS Medical Team",
            slug: "/blog/how-to-choose-ambulance-service/"
        },
        {
            title: "Private Ambulance Services Across UAE",
            excerpt: "Understanding the benefits of private ambulance services for non-emergency and inter-facility transfers.",
            date: "Jan 3, 2026",
            author: "Dr. Sarah Ahmed",
            slug: "/blog/private-ambulance-services-across-uae/"
        },
        {
            title: "Emergency Patient Transfers Explained",
            excerpt: "A guide to how emergency patient transfers work between hospitals and what keeps patients safe during the journey.",
            date: "Dec 28, 2025",
            author: "EMRS Operations",
            slug: "/blog/emergency-patient-transfers-uae/"
        }
    ];

    return (
        <section className="py-24 bg-gray-50" id="blog">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold text-sm uppercase tracking-wide">Latest Insights</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-4 mb-4">
                        Medical Transport Resources
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Expert advice, industry updates, and health guides from our medical professionals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {posts.map((post, index) => (
                        <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow duration-300 border-none shadow-md">
                            <CardHeader>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <User className="w-4 h-4" />
                                        <span>{post.author}</span>
                                    </div>
                                </div>
                                <CardTitle className="text-xl font-bold text-primary line-clamp-2">
                                    <Link to={post.slug} className="hover:text-accent transition-colors">
                                        {post.title}
                                    </Link>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground line-clamp-3">
                                    {post.excerpt}
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="ghost" className="p-0 h-auto font-semibold text-accent hover:text-accent/80 hover:bg-transparent" asChild>
                                    <Link to={post.slug} className="flex items-center gap-1 group">
                                        Read Article
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
