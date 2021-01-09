# frozen_string_literal: true

require_relative "lib/minitest/rails_event_store/version"

Gem::Specification.new do |spec|
  spec.name             = "minitest-rails_event_store"
  spec.version          = Minitest::RailsEventStore::VERSION
  spec.license          = "MIT"
  spec.authors          = ["Arkency"]
  spec.email            = ["dev@arkency.com"]
  spec.summary          = "Minitest assertions for RailsEventStore"
  spec.homepage         = "https://railseventstore.org"
  spec.files            = Dir["lib/**/*"]
  spec.require_paths    = ["lib"]
  spec.extra_rdoc_files = %w[README.md]
  spec.metadata = {
    "homepage_uri"    => spec.homepage,
    "source_code_uri" => "https://github.com/RailsEventStore/rails_event_store",
    "bug_tracker_uri" => "https://github.com/RailsEventStore/rails_event_store/issues",
  }

  spec.required_ruby_version = ">= 2.5"

  spec.add_development_dependency "minitest", "~> 5.0"
  spec.add_dependency "rails_event_store", ">= 1.0.0"
end