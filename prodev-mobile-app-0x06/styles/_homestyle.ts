import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
  },
  searchGroup: {
    padding: 16,
    backgroundColor: "white",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 18,
    color: "#333",
  },
  searchControl: {
    borderWidth: 1,
    borderColor: "#E9E9E9",
    borderRadius: 8,
    padding: 10,
    marginTop: 6,
  },
  searchButton: {
    backgroundColor: "#34967C",
    padding: 12,
    borderRadius: 8,
    marginLeft: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  filterGroup: {
    flexDirection: "row",
    padding: 12,
    gap: 12,
    alignItems: "center",
  },
  filterContainer: {
    width: 80,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  listingContainer: {
    padding: 16,
  },
  paginationContainer: {
    alignItems: "center",
    paddingVertical: 24,
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  showMoreButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export { styles };
