import { Header } from './header';
import { MediaType } from './media-type';
import { Link } from './link';
import { Reference } from './reference';

/**
 * Describes a single response from an API Operation, including design-time, static links to
 * operations based on the response.
 *
 * source: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#responsesObject
 */
export interface Response {
  /**
   * REQUIRED. A short description of the response. CommonMark syntax MAY be used for rich text
   * representation.
   */
  description: string;
  /**
   * Maps a header name to its definition. RFC7230 states header names are case insensitive. If a
   * response header is defined with the name "Content-Type", it SHALL be ignored.
   */
  headers?: Map<string, Header | Reference>;
  /**
   * A map containing descriptions of potential response payloads. The key is a media type or media
   * type range and the value describes it. For responses that match multiple keys, only the most specific key is applicable. e.g. text/plain overrides text/*
   */
  content?: Map<string, MediaType>;
  /**
   * A map of operations links that can be followed from the response. The key of the map is a
   * short name for the link, following the naming constraints of the names for Component Objects.
   */
  links?: Map<string, Link | Reference>;
}
