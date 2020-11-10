import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TextInput, AsyncStorage } from "react-native";

import styles from "./styles";
import PageHeader from "../../components/PageHeader";
import TeacherItem, { ITeacherProps } from "../../components/TeacherItem";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";

import { Feather } from "@expo/vector-icons";

import api from "../../services/api";
function TeacherList() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const [subject, setSubject] = useState("");
  const [week_day, setWeek_day] = useState("");
  const [time, setTime] = useState("");

  const [favorites, setFavorites] = useState<Number[]>([]);

  const [teachers, setTeachers] = useState([]);

  function handleToggleFilterVisible() {
    setIsFilterVisible(!isFilterVisible);
  }

  async function handleFiltersSubmit() {
    const response = await api.get("classes", {
      params: {
        subject,
        week_day,
        time,
      },
    });
    setIsFilterVisible(false);
    setTeachers(response.data);
  }

  useEffect(() => {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map(
          (teacher: ITeacherProps) => {
            return teacher.id;
          }
        );
        setFavorites(favoritedTeachersIds);
      }
    });
  }, []);
  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={
          <BorderlessButton onPress={handleToggleFilterVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }
      >
        {isFilterVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              placeholderTextColor="#c1bccc"
              style={styles.input}
              value={subject}
              onChangeText={(text) => setSubject(text)}
              placeholder="Qual a matéria"
            />
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  placeholderTextColor="#c1bccc"
                  style={styles.input}
                  value={week_day}
                  onChangeText={(text) => setWeek_day(text)}
                  placeholder="Qual o dia"
                />
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  placeholderTextColor="#c1bccc"
                  style={styles.input}
                  value={time}
                  onChangeText={(text) => setTime(text)}
                  placeholder="Qual horário"
                />
              </View>
            </View>
            <RectButton
              style={styles.submitButton}
              onPress={handleFiltersSubmit}
            >
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
      >
        {teachers.map((teacher: ITeacherProps) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited={favorites.includes(teacher.id)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

export default TeacherList;
