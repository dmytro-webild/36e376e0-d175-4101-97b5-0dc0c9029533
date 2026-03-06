"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import { User, LogOut, Settings, Award, TrendingUp, Target, Calendar, Clock } from 'lucide-react';
import { useState } from 'react';

export default function ProfilePage() {
  const [userStats] = useState({
    name: "Sarah Chen",    email: "sarah.chen@example.com",    joinDate: "January 15, 2025",    totalStudyHours: 1247,
    currentStreak: 32,
    longestStreak: 89,
    goalsCompleted: 156,
    averageSessionLength: 45
  });

  const [achievements] = useState([
    { id: "1", name: "Week Warrior", description: "7-day study streak", earned: true },
    { id: "2", name: "Century Club", description: "100 study hours", earned: true },
    { id: "3", name: "Goal Master", description: "50 goals completed", earned: true },
    { id: "4", name: "Legend", description: "500 study hours", earned: false }
  ]);

  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="mediumLarge"
      sizing="mediumLargeSizeMediumTitles"
      background="circleGradient"
      cardStyle="outline"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="StudyFlow"
          navItems={[
            { name: "Features", id: "features" },
            { name: "Benefits", id: "about" },
            { name: "Pricing", id: "metrics" },
            { name: "FAQ", id: "faq" },
            { name: "Profile", id: "profile" }
          ]}
          button={{ text: "Logout", href: "/" }}
          animateOnLoad={true}
        />
      </div>

      <div className="min-h-screen pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                  <User size={48} className="text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold mb-2">{userStats.name}</h1>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">{userStats.email}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Member since {userStats.joinDate}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                  <Settings size={20} />
                  Settings
                </button>
                <button className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                  <LogOut size={20} />
                  Logout
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-gray-600 dark:text-gray-400">Study Hours</p>
                  <Clock className="text-purple-600" size={20} />
                </div>
                <p className="text-3xl font-bold">{userStats.totalStudyHours.toLocaleString()}</p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-gray-600 dark:text-gray-400">Current Streak</p>
                  <TrendingUp className="text-orange-600" size={20} />
                </div>
                <p className="text-3xl font-bold">{userStats.currentStreak} days</p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-gray-600 dark:text-gray-400">Goals Completed</p>
                  <Target className="text-green-600" size={20} />
                </div>
                <p className="text-3xl font-bold">{userStats.goalsCompleted}</p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-gray-600 dark:text-gray-400">Longest Streak</p>
                  <Award className="text-yellow-600" size={20} />
                </div>
                <p className="text-3xl font-bold">{userStats.longestStreak} days</p>
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Your Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    achievement.earned
                      ? 'bg-purple-50 dark:bg-purple-900/20 border-purple-300 dark:border-purple-600'
                      : 'bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600 opacity-50'
                  }`}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 mb-4">
                    <Award size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold mb-2">{achievement.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{achievement.description}</p>
                  <div className="text-xs font-semibold">
                    {achievement.earned ? (
                      <span className="text-green-600 dark:text-green-400">✓ Unlocked</span>
                    ) : (
                      <span className="text-gray-500">Locked</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Study History */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Recent Study Sessions</h2>
            <div className="space-y-4">
              {[
                { date: "Today", duration: 120, subject: "Mathematics" },
                { date: "Yesterday", duration: 90, subject: "Physics" },
                { date: "2 days ago", duration: 150, subject: "Biology" },
                { date: "3 days ago", duration: 75, subject: "Chemistry" },
                { date: "4 days ago", duration: 105, subject: "English Literature" }
              ].map((session, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{session.subject}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{session.date}</p>
                  </div>
                  <p className="text-lg font-bold text-purple-600">{session.duration} min</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}